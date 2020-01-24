package org.kader.employes.entities;

import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Departement {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nameDepartemnt;
	@JsonProperty(access = Access.WRITE_ONLY)
    @OneToMany(mappedBy = "departement")
	private Collection<Employe>employes;

}
