import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  employee: Employee [] ;

  isUpdate = false;



  constructor(private instance: EmpServiceService) { }

  // get EmpDetail():Employee[] {
  //   console.log(this.Instance.emp);
  //   return this.Instance.emp;
  // }

  Remove(EmployeeDetail) {

    this.employee.splice(EmployeeDetail, 1);

  }

  Edit(EmployeeDetail, i) {
    console.log(EmployeeDetail);
    this.isUpdate = !this.isUpdate;
    this.instance.Edit(this.isUpdate);
    this.instance.Editdetail(EmployeeDetail, i);
    this.instance.isEdit = true;

  }
  ngOnInit() {
    // this.employee = this.instance.newData;
        this.instance.getData().subscribe(emp => this.employee =emp);

    // this.isEdit=this.instance.isEdit;
    // console.log('employees data here',this.employee);
  }
  get isEdit(): boolean {
    return this.instance.isEdit;
  }
}
