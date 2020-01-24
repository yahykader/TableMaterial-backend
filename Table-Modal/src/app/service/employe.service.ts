import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Employe } from '../model/employe.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private host :String ="http://localhost:8080";
  constructor(private http: HttpClient) { }
  
  public getEmployes():Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host+"/employees");
  }
}
