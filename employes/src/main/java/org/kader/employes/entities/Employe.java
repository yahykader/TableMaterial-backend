package org.kader.employes.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

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
	private String city;
	private int gender;
	private Date hireDate;
	private boolean isPermanent;
	@ManyToOne
	private Departement departement;
}

