package org.kader.employes;

import java.util.List;
import java.util.stream.Stream;

import org.kader.employes.entities.Departement;
import org.kader.employes.entities.Employe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.experimental.Delegate;


@SpringBootApplication
public class EmployesApplication implements CommandLineRunner{

	@Autowired 
	private  EmployeesRepository employeesRepository;
	@Autowired
	private RepositoryRestConfiguration  repositoryRestConfiguration;
	@Autowired
	private DepartementRepository departementRepository;
	public static void main(String[] args) {
		SpringApplication.run(EmployesApplication.class, args);
	}
	public void initDepartement() {
		   Stream.of("Developpement","Conception","Buisness","Devops").forEach(nameDepartemnt->{
			   Departement departement=new Departement();
			   departement.setNameDepartemnt(nameDepartemnt);
			   departementRepository.save(departement);
		   });
		}
	public void initEmploye() {
		departementRepository.findAll().forEach(departement->{
			Stream.of("Nesrine","Abdelkader","Yacine","Zohra","mounir","iyed",
					   "ilyes","idriss","houcin","sana","asma","annas","aya").forEach(lastName->{
						   Stream.of("Yahyaoui").forEach(firstName->{
							   Employe e=new Employe();
							   e.setLastName(lastName);
							   e.setFirstName(firstName);
							   e.setEmail(lastName+"@gmail.com");
							   e.setAge(1+(int)(Math.random()*10));	
							   e.setDepartement(departement);
							   employeesRepository.save(e);
							   //employeesRepository.findAll().forEach(e.getFirstName());
						   });
					   });
		});

	}

	@Override
	public void run(String... args) throws Exception {
	   repositoryRestConfiguration.exposeIdsFor(Employe.class,Departement.class);
       this.initDepartement();
       this.initEmploye();		
	}
}

@RepositoryRestResource
@CrossOrigin("*")
interface EmployeesRepository extends JpaRepository<Employe, Long>{	
}
@RepositoryRestResource
@CrossOrigin("*")
interface DepartementRepository extends JpaRepository<Departement, Long>{	
}
@RestController
@CrossOrigin("*")
class EmployerController {
	@Autowired 
	private  EmployeesRepository employeesRepository;
	@Autowired
	private DepartementRepository departementRepository; 
	
	@GetMapping(value="/employees")
	public List<Employe>getAllEmployees() {
		
		return employeesRepository.findAll();
	}
	@GetMapping(value="/employee/{id}")
	public Employe getEmployee(@PathVariable(name="id")Long id) {
		return employeesRepository.findById(id).get();
	}
	@GetMapping(value="/departements")
	public List<Departement>getAlldepartements() {
		
		return departementRepository.findAll();
	}
	
	@PostMapping(value="/addEmploye")
	public Employe addEmploye(@RequestBody Employe employe) {	
	    return	employeesRepository.save(employe);
	}
	
	@DeleteMapping(value="/deleteEmploye/{id}")
	public void deleteEmploye(@PathVariable("id") Long id) {	
	     	employeesRepository.deleteById(id);
	}
	@PutMapping("/updateEmploye/{id}")
	public Employe update(@PathVariable(name="id")Long id,@RequestBody Employe employe){
		employe.setId(id);
		return employeesRepository.save(employe);
		
	}
	
		
}