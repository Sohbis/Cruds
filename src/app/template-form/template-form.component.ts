import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
import {NgForm} from '@angular/forms';
import { ListComponent} from '../list/list.component'
import { EmpServiceService} from '../emp-service.service'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})


export class TemplateFormComponent implements OnInit {

isUpdate: boolean =false;
  // Name: string;
  // Email: string;
  // Contact: number;
    

  constructor( private instance : EmpServiceService ) { }

user: Employee =
{
  name:'',
  email:'',
  phoneNumber:null
}



  emp = [];
  Add(form: NgForm) {
    
    console.log(form.value);
    this.user=form.value;
    this.emp.push(this.user);
    this.instance.empD(form.value);

    this.user.name = '';
    this.user.email = '';
    this.user.phoneNumber = null;

  }

  Edit(EmployeeDetail) {
    this.user.name = EmployeeDetail.Name;
    this.isUpdate=true;
  }
    Update(forms: NgForm, i) {
    this.emp.splice(i, 1);
    this.emp.push(forms.value);
    // this.employee.name = '';
    // this.employee.email = '';
    // this.employee.phoneNumber = null;
    this.isUpdate = !this.isUpdate;
    console.log(this.isUpdate);
  }

  Remove(EmployeeDetail) {

    this.emp.splice(EmployeeDetail, 1);

  }
  getData() {
    // console.log(this.instance.getData());
  }

  ngOnInit() 
  {
  
  this.isUpdate=this.instance._isUpdate;
if(this.isUpdate){
  this.user.name = this.instance.newDetail.name;
  console.log("User--->" + this.instance.Editdetail.name);
}
  }

}
