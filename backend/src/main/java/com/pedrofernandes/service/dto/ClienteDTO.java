package com.pedrofernandes.service.dto;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A DTO for the {@link com.pedrofernandes.domain.Cliente} entity.
 */
public class ClienteDTO implements Serializable {
    
    private Long id;

    private String nome;

    private String cpf;

    private LocalDate dtNasc;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getDtNasc() {
        return dtNasc;
    }

    public void setDtNasc(LocalDate dtNasc) {
        this.dtNasc = dtNasc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ClienteDTO)) {
            return false;
        }

        return id != null && id.equals(((ClienteDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ClienteDTO{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", cpf='" + getCpf() + "'" +
            ", dtNasc='" + getDtNasc() + "'" +
            "}";
    }
}
