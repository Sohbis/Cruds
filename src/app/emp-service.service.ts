import { Injectable } from '@angular/core';
import { Employee} from './Model/employee.model';
@Injectable()
export class EmpServiceService {

  newData: Employee[] = [];
  newDetail: Employee=
  {
    name:'',
    email:'',
    phoneNumber:null
  };

  _isUpdate=false;
  constructor() { }

 empD(data)
 {
  // this.newData=data;
  this.newData.push(data);
  // console.log('called', data);
 }

 

 getData() {
 	return this.newData;
 }
Edit(isUpdate)
{
this._isUpdate=isUpdate;
console.log(this._isUpdate);
}
Editdetail(newDetail, i)
{
  // this._newDetail.name=newDetail.name;
  // this._newDetail.email = newDetail.email;

  this.newDetail.name=newDetail.Name;
  console.log(newDetail.Name);
   
} 
NewData():Employee{
  return this.newDetail;

}
}
