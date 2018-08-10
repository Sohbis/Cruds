import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
// import { EMPDATA } from '../Model/empdata';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListComponent } from '../List/list.component';
import { EmpServiceService } from '../emp-service.service';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})


export class TemplateFormComponent implements OnInit {

  isUpdate = false;
  constructor(private instance: EmpServiceService) { }
  user = this.instance.value;

  ngOnInit() {
    // this.Reset();
  }
  Add(form: NgForm) {

    // this.instance.postEmp(form.value).subscribe(emp => this.empdata.unshift(form.value));
    // console.log(this.empdata);
    // this.instance.postEmp(form.value).subscribe(emp => console.log (form.value));

    this.instance.insertEmp(form.value);
    
    // this.Reset(form);
  }
  Reset(form?: NgForm) {
    if( form != null) {
      form.reset();
    }
     
    this.instance.value = {
      $key: '',
      name: '',
      email: '',
      contact: null,
    };
  }
}


