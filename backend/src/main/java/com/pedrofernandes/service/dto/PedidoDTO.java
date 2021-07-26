package com.pedrofernandes.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A DTO for the {@link com.pedrofernandes.domain.Pedido} entity.
 */
public class PedidoDTO implements Serializable {
    
    private Long id;

    private Double totalCompra;

    private LocalDate dataCompra;

    private Set<ProdutoDTO> produtos = new HashSet<>();

    private Long clienteId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTotalCompra() {
        return totalCompra;
    }

    public void setTotalCompra(Double totalCompra) {
        this.totalCompra = totalCompra;
    }

    public LocalDate getDataCompra() {
        return dataCompra;
    }

    public void setDataCompra(LocalDate dataCompra) {
        this.dataCompra = dataCompra;
    }

    public Set<ProdutoDTO> getProdutos() {
        return produtos;
    }

    public void setProdutos(Set<ProdutoDTO> produtos) {
        this.produtos = produtos;
    }

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PedidoDTO)) {
            return false;
        }

        return id != null && id.equals(((PedidoDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PedidoDTO{" +
            "id=" + getId() +
            ", totalCompra=" + getTotalCompra() +
            ", dataCompra='" + getDataCompra() + "'" +
            ", produtos='" + getProdutos() + "'" +
            ", clienteId=" + getClienteId() +
            "}";
    }
}
