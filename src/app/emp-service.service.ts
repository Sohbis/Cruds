import { Injectable } from '@angular/core';
import { Employee} from './Model/employee.model';
@Injectable()
export class EmpServiceService {

  newData: Employee[] = [];
  newDetail: Employee;
  constructor() { }

 empD(data)
 {
  // this.newData=data;
  this.newData.push(data);
  console.log('called', data);
 }

 

 getData() {
 	return this.newData;
 }

Editdetail(newDetail, i)
{
  // this._newDetail.name=newDetail.name;
  // this._newDetail.email = newDetail.email;

  this.newDetail=newDetail;
} 
}
