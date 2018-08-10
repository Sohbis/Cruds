import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';
import { NgForm } from '@angular/forms';
import { EmpServiceService } from '../emp-service.service';
import { TemplateFormComponent } from '../template-form/template-form.component';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  employee: Employee [];

  isUpdate = false;
  employeeList: Employee[] = [];
  
  constructor(private instance: EmpServiceService ) {

   }
  // Edit(EmployeeDetail, i) {
  //   console.log(EmployeeDetail);
  // }
  // ngOnInit() {
  //       // this.instance.getData().subscribe(emp => this.employee =emp);
  
  //     }
  ngOnInit() {
    
    console.log('getEmp called');

    const x = this.instance.getEmp();

    x.snapshotChanges().subscribe(item => {

      item.forEach(element => {

        const y = element.payload.toJSON();

        y['$key'] = element.key;

        this.employeeList.push(y as Employee);

      });

    });

  }
}
