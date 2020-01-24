import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import { Departement } from 'src/app/model/departement.model';
import {MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  listDepartments:Departement[];
  constructor(public employeService: EmployeService,public dialogRef:MatDialogRef<EmployeComponent>) { }
 //
  ngOnInit() {
    this.getDepartements();
 }
public getDepartements(){
  this.employeService.getDepartments()
    .subscribe(list => {
        this.listDepartments= list;
        console.log(this.listDepartments);
      },err=>{
        console.log(err);
      });
    }
public onClear(){
      this.employeService.employeForm.reset();
      this.employeService.initializeFromGroup();
     // this.employeService.success("::Submitted successfully");
} 


public  onSubmit(){
   if(this.employeService.employeForm.valid){
     this.employeService.insertEmploye(this.employeService.employeForm.value);
     this.employeService.employeForm.reset();
     this.employeService.initializeFromGroup();
     //this.employeService.success("::Submitted successfully");
     this.onClose();
   }
}
public onClose(){
    this.employeService.employeForm.reset();
    this.employeService.initializeFromGroup();
    this.dialogRef.close();
  }
}

