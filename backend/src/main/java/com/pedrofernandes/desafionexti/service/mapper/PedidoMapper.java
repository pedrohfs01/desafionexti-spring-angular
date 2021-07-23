package com.pedrofernandes.desafionexti.service.mapper;


import com.pedrofernandes.desafionexti.domain.*;
import com.pedrofernandes.desafionexti.service.dto.PedidoDTO;

import org.mapstruct.*;
import org.springframework.stereotype.Component;

/**
 * Mapper for the entity {@link Pedido} and its DTO {@link PedidoDTO}.
 */
@Mapper(componentModel = "spring", uses = {ProdutoMapper.class, ClienteMapper.class})
@Component
public interface PedidoMapper extends EntityMapper<PedidoDTO, Pedido> {

    @Mapping(source = "cliente.id", target = "clienteId")
    PedidoDTO toDto(Pedido pedido);

    @Mapping(target = "removeProduto", ignore = true)
    @Mapping(source = "clienteId", target = "cliente")
    Pedido toEntity(PedidoDTO pedidoDTO);

    default Pedido fromId(Long id) {
        if (id == null) {
            return null;
        }
        Pedido pedido = new Pedido();
        pedido.setId(id);
        return pedido;
    }
}
