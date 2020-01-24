package org.kader.employes.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RestController;

import lombok.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Employe implements Serializable{
	
	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private Long mobile;
	private int age;
}

