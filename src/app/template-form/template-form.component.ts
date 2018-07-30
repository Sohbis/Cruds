import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
// import { EMPDATA } from '../Model/empdata';
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


export class TemplateFormComponent  {

isUpdate = false;
// index;
 constructor( private instance: EmpServiceService ) { }
  user= this.instance.value;

  // @Input()
 // empdata: Employee[] = [];


 
  Add(form: NgForm) {

    // this.instance.postEmp(form.value).subscribe(emp => this.empdata.unshift(form.value));
    // console.log(this.empdata);
    this.instance.postEmp(form.value).subscribe(emp => console.log (form.value));
  }

}


