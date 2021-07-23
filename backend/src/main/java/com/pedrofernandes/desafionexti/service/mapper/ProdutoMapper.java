package com.pedrofernandes.desafionexti.service.mapper;


import com.pedrofernandes.desafionexti.domain.*;
import com.pedrofernandes.desafionexti.service.dto.ProdutoDTO;

import org.mapstruct.*;
import org.springframework.stereotype.Component;

/**
 * Mapper for the entity {@link Produto} and its DTO {@link ProdutoDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
@Component
public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {


    @Mapping(target = "pedidos", ignore = true)
    @Mapping(target = "removePedido", ignore = true)
    Produto toEntity(ProdutoDTO produtoDTO);

    default Produto fromId(Long id) {
        if (id == null) {
            return null;
        }
        Produto produto = new Produto();
        produto.setId(id);
        return produto;
    }
}
