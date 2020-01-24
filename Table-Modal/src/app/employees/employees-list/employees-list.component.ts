import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Employe } from 'src/app/model/employe.model';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listEmployes:Employe [];
  searchkey:string;  

  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'age', 'actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(public employeService:EmployeService) { }

  ngOnInit() {
    this.getEmployes();
  }
  public getEmployes(){
    this.employeService.getEmployes()
      .subscribe(data => {
          this.listEmployes= data;
          console.log(this.listEmployes);
          this.listData=new MatTableDataSource(this.listEmployes);
          this.listData.sort=this.sort;
          this.listData.paginator=this.paginator;
          console.log(this.listData);
    },err=>{
      console.log(err);
    });
  }

  onSearchClear(){
    this.searchkey="";
    this.applyFilter();
  }
  applyFilter(searchkey:string){
    this.listData.filter=this.searchkey.trim().toLowerCase();
  }


}
