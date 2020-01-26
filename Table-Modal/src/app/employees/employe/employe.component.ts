import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import { Departement } from 'src/app/model/departement.model';
import {MatDialogRef} from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  listDepartments:Departement[];
  constructor(public employeService: EmployeService,
    public notificationService: NotificationService,
              public dialogRef:MatDialogRef<EmployeComponent>) {  }
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
  this.notificationService.success(':: Submitted successfully');
} 

public onClose(){
  this.employeService.employeForm.reset();
  this.employeService.initializeFromGroup();
  this.dialogRef.close();
}

public addEmploye(dataForm){
  this.employeService.insertEmploye(dataForm).subscribe(data=>{
    console.log(dataForm);
    this.employeService.getEmployes();
});
}

  
public  onAddEmploye(dataForm){
  if(this.employeService.employeForm.valid){
    if (!this.employeService.employeForm.get('id').value)
    this.addEmploye(this.employeService.employeForm.value);
  else
    this.updateEmployee(this.employeService.employeForm.value);
    this.employeService.employeForm.reset();
    this.employeService.initializeFromGroup();
    this.notificationService.success(':: Submitted successfully');
    this.onClose(); 
  }}
  
  public updateEmployee(dataForm){

  }

}