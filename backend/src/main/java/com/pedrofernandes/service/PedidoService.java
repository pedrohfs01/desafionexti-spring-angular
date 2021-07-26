package com.pedrofernandes.service;

import com.pedrofernandes.domain.Pedido;
import com.pedrofernandes.repository.PedidoRepository;
import com.pedrofernandes.service.dto.PedidoDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Pedido}.
 */
@Service
@Transactional
public class PedidoService {

    private final Logger log = LoggerFactory.getLogger(PedidoService.class);

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    /**
     * Save a pedido.
     *
     * @param pedidoDTO the entity to save.
     * @return the persisted entity.
     */
    public PedidoDTO save(PedidoDTO pedidoDTO) {
        log.debug("Request to save Pedido : {}", pedidoDTO);
        Pedido pedido = this.toEntity(pedidoDTO);
        pedido = pedidoRepository.save(pedido);
        return this.toDto(pedido);
    }

    /**
     * Get all the pedidos.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<PedidoDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Pedidos");
        return pedidoRepository.findAll(pageable)
            .map(this::toDto);
    }


    /**
     * Get all the pedidos with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<PedidoDTO> findAllWithEagerRelationships(Pageable pageable) {
        return pedidoRepository.findAllWithEagerRelationships(pageable).map(this::toDto);
    }

    /**
     * Get one pedido by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<PedidoDTO> findOne(Long id) {
        log.debug("Request to get Pedido : {}", id);
        return pedidoRepository.findOneWithEagerRelationships(id)
            .map(this::toDto);
    }

    /**
     * Delete the pedido by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Pedido : {}", id);
        pedidoRepository.deleteById(id);
    }

    public PedidoDTO toDto(Pedido pedido){
        PedidoDTO pedidoDto = new PedidoDTO();
        BeanUtils.copyProperties(pedido, pedidoDto);
        return pedidoDto;
    }

    public Pedido toEntity(PedidoDTO pedidoDTO){
        Pedido pedido = new Pedido();
        BeanUtils.copyProperties(pedidoDTO, pedido);
        return pedido;
    }
}
