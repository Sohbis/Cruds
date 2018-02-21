import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { EmpServiceService } from '../emp-service.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  employee:any []=[];

  constructor(private instance: EmpServiceService) { }
 
  // get EmpDetail():Employee[] {
  //   console.log(this.Instance.emp);
  //   return this.Instance.emp;
  // }



  Remove(EmployeeDetail) {

    this.employee.splice(EmployeeDetail, 1);

  }
  // Update(forms: NgForm, i) {
  //   // this.employee = forms.value;
  //   this.employee.splice(i, 1);
  //   this.employee.push(forms.value);
  //   // this.employee.name = '';
  //   // this.employee.email = '';
  //   // this.employee.phoneNumber = null;
  //   // this.update = !this.update;
  // }
  Edit(EmployeeDetail,i) 
  {
    console.log(EmployeeDetail);


  }
  ngOnInit() {
    this.employee.push(this.instance.newData);
    console.log(this.employee) ;
  }

}
