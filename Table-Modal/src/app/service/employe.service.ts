import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Employe } from '../model/employe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Departement } from '../model/departement.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private host :String ="http://localhost:8080";
  constructor(private http: HttpClient) { }
  

  public getEmployes():Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host+"/employees");
  }
  public getDepartments():Observable<Departement[]>{
    return this.http.get<Departement[]>(this.host+"/departements");
  }

  employeForm:FormGroup= new FormGroup({
    id :new FormControl(null),
    firstName :new FormControl('',Validators.required),
    lastName :new FormControl('',Validators.required),
    email :new FormControl('',Validators.email),
    mobile :new FormControl('',[Validators.required,Validators.minLength(8)]),
    age :new FormControl(''),
    city:new FormControl('',Validators.required),
    gender :new FormControl('1'),
    hireDate :new FormControl(''),
    isPermanent :new FormControl(false),
    departement :new FormControl(0)
  });
  initializeFromGroup(){
    this.employeForm.setValue({
      id :null,
      firstName :'',
      lastName :'',
      email :'',
      mobile :'',
      age :'',
      city:'',
      gender :'1',
      hireDate :'',
      isPermanent :'false',
      departement :null
    });
  }  
  public insertEmploye(employeForm){

  }
  public success(){
    
  }
 
}
