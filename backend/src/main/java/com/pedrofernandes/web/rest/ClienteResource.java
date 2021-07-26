package com.pedrofernandes.web.rest;

import com.pedrofernandes.service.ClienteService;
import com.pedrofernandes.service.dto.ClienteDTO;
import com.pedrofernandes.web.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.pedrofernandes.domain.Cliente}.
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ClienteResource {

    private final Logger log = LoggerFactory.getLogger(ClienteResource.class);

    private static final String ENTITY_NAME = "cliente";

    private final ClienteService clienteService;

    public ClienteResource(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    /**
     * {@code POST  /clientes} : Create a new cliente.
     *
     * @param clienteDTO the clienteDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new clienteDTO, or with status {@code 400 (Bad Request)} if the cliente has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/clientes")
    public ResponseEntity<ClienteDTO> createCliente(@RequestBody ClienteDTO clienteDTO) throws URISyntaxException {
        log.debug("REST request to save Cliente : {}", clienteDTO);
        if (clienteDTO.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists",
                    "A new acao cannot already have an ID")).body(null);
        }
        ClienteDTO result = clienteService.save(clienteDTO);
        return ResponseEntity.created(new URI("/api/clientes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /clientes} : Updates an existing cliente.
     *
     * @param clienteDTO the clienteDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated clienteDTO,
     * or with status {@code 400 (Bad Request)} if the clienteDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the clienteDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/clientes")
    public ResponseEntity<ClienteDTO> updateCliente(@RequestBody ClienteDTO clienteDTO) throws URISyntaxException {
        log.debug("REST request to update Cliente : {}", clienteDTO);
        if (clienteDTO.getId() == null) {
            return createCliente(clienteDTO);
        }
        ClienteDTO result = clienteService.save(clienteDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, clienteDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /clientes} : get all the clientes.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of clientes in body.
     */
    @GetMapping("/clientes")
    public ResponseEntity<List<ClienteDTO>> getAllClientes(Pageable pageable) {
        log.debug("REST request to get a page of Clientes");
        Page<ClienteDTO> page = clienteService.findAll(pageable);
        return ResponseEntity.ok().body(page.getContent());
    }

    /**
     * {@code GET  /clientes/:id} : get the "id" cliente.
     *
     * @param id the id of the clienteDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the clienteDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/clientes/{id}")
    public ClienteDTO getCliente(@PathVariable Long id) {
        log.debug("REST request to get Cliente : {}", id);
        Optional<ClienteDTO> clienteDTO = clienteService.findOne(id);
        return clienteDTO.get();
    }

    /**
     * {@code DELETE  /clientes/:id} : delete the "id" cliente.
     *
     * @param id the id of the clienteDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
        log.debug("REST request to delete Cliente : {}", id);
        clienteService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
