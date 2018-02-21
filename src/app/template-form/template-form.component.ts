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
    
    this.emp.push(form.value);
    this.instance.empD(form.value);

    // this.user.name = '';
    // this.user.email = '';
    // this.user.phoneNumber = null;

  }

  Edit(EmployeeDetail) {
    this.user = EmployeeDetail;
  }

  Remove(EmployeeDetail) {

    this.emp.splice(EmployeeDetail, 1);

  }
  getData() {
    console.log(this.instance.getData());
  }

  ngOnInit() {
  }

}
