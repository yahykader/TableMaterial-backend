package org.kader.employes;

import java.util.List;
import java.util.stream.Stream;

import org.kader.employes.entities.Employe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class EmployesApplication implements CommandLineRunner{

	@Autowired 
	private  EmployeesRepository employeesRepository;
	@Autowired
	private RepositoryRestConfiguration  repositoryRestConfiguration;
	public static void main(String[] args) {
		SpringApplication.run(EmployesApplication.class, args);
	}
  

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Employe.class);
		Stream.of("Nesrine","Abdelkader","Yacine","Zohra","mounir","iyed",
				   "ilyes","idriss","houcin","sana","asma","annas","aya").forEach(lastName->{
					   Stream.of("Yahyaoui").forEach(firstName->{
						   Employe e=new Employe();
						   e.setLastName(lastName);
						   e.setFirstName(firstName);
						   e.setEmail(lastName+"@gmail.com");
						   e.setAge(1+(int)(Math.random()*10));		
						   employeesRepository.save(e);
						   //employeesRepository.findAll().forEach(e.getFirstName());
					   });
				   });

		
	}
}
@RepositoryRestResource
@CrossOrigin("*")
interface EmployeesRepository extends JpaRepository<Employe, Long>{	
}
@RestController
@CrossOrigin("*")
class EmployerController {
	@Autowired 
	private  EmployeesRepository employeesRepository;
	
	@GetMapping(value="/employees")
	public List<Employe>getAllEmployees() {
		
		return employeesRepository.findAll();
	}
}