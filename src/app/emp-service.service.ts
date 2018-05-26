import { Injectable } from '@angular/core';
import { Employee} from './Model/employee.model';
import { NgForm } from '@angular/forms';
@Injectable()
export class EmpServiceService {
  isUpdate = false;
  index;
  isEdit = false;
  newData: Employee[] = [];
  newDetail: Employee =
  {
    name: '',
    email: '',
    contact: null
  };

  _isUpdate = false;
  constructor() { }

 empD(data) {
  // this.newData=data;
  this.newData.push(data);
   console.log('called', data);
 }



 getData() {
  return this.newData;
 }
Edit(isUpdate) {
this._isUpdate = isUpdate;
console.log(this._isUpdate);
}
Editdetail(newDetail, i) {
  // this._newDetail.name=newDetail.name;
  // this._newDetail.email = newDetail.email;

  this.newDetail.name = newDetail.Name;

  this.index = i;

  console.log(newDetail.Name);

}
  NewData(forms: NgForm, i) {
    this.newData.splice(this.index, 1, forms.value);
    // this.newData.push(forms.value);
    this.newDetail.name = '';
    this._isUpdate = !this._isUpdate;
    this.isEdit = !this.isEdit;

  }
}
