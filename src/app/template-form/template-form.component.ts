import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
import { EMPDATA } from '../Model/empdata';
import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ListComponent} from '../List/list.component';
import { EmpServiceService} from '../emp-service.service';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})


export class TemplateFormComponent implements OnInit {

isUpdate = false;
index;


  constructor( private instance: EmpServiceService ) { }

user: Employee =
{
  name: '',
  email: '',
  contact: null
};
@Input()
empdata: Employee[]=[];

 // empdata = [];
 
  Add(form: NgForm) {

    // this.empdata.push(form.value)
    
    // this.instance.postEmp(form.value).subscribe(emp => this.empdata = emp);

    // this.instance.postEmp(form.value).subscribe(emp=> this.empdata=emp);
    this.instance.postEmp(form.value).subscribe(emp => this.empdata.unshift(form.value));


    console.log(this.empdata);

  }

  // Edit(EmployeeDetail, i) {
  //   this.user.name = EmployeeDetail.Name;
  //   // this.isUpdate = true;
  //   this.index = i;
  // }
  //   Update(forms: NgForm, i) {
  //   this.emp.splice(this.index, 1, forms.value);
  //   // this.emp.push(forms.value);
  //   this.instance.NewData(forms, this.index);
  //   // this.employee.name = '';
  //   // this.employee.email = '';
  //   // this.employee.phoneNumber = null;
  //   this.isUpdate = false;
  //   console.log('value of update', this.isUpdate);
  // }

  // Remove(EmployeeDetail) {

  //   this.emp.splice(EmployeeDetail, 1);

  // }
  getData() {
    // console.log(this.instance.getData());
  }

  ngOnInit() {
        
        // this.instance.getData().subscribe(emp => this.empdata = emp);

//   this.isUpdate = this.instance._isUpdate;
// if (this.isUpdate) {
//   this.user.name = this.instance.newDetail.name;
  // console.log("User--->" + this.instance.Editdetail.name);
}
  }


