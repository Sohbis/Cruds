import { Injectable } from '@angular/core';
import { Employee} from './Model/employee.model';
import { NgForm } from '@angular/forms';
import { EMPDATA } from './Model/empdata';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from './baseurl';
import { stringify } from 'querystring';

@Injectable()
export class EmpServiceService {
  isUpdate = false;
url:string;
  isEdit = false;
  newData: Employee[] = [];
  newDetail: Employee =
  {
    name: '',
    email: '',
    contact: null
  };

  _isUpdate = false;
  constructor(private http:Http) { }

 empD(data) {
  // this.newData=data;
  this.newData.push(data);
   console.log('called', data);
 }

 postEmp(value):Observable<Employee[]> {
    console.log(value);
    return this.http.post(baseURL +'list', value).map(res => res.json());
 
  }

 getData(): Observable<Employee[]> {
  console.log('called'); 
  return this.http.get(baseURL+'list').map(res=>res.json());
 }
  
 EmpData(id:number): Observable<Employee> {
    this.url = baseURL + 'list/' + id;
    return this.http.get(this.url).map(res => res.json());
  }

  UpdateEmp(value): Observable<Employee[]> {
   
    return this.http.put(this.url, value).map(res => res.json());

  }

  DeleteEmp(value): Observable<Employee[]> {

    return this.http.delete(baseURL+'list/'+value.id,value).map(res=>res.json());

  }
Edit(isUpdate) {
this._isUpdate = isUpdate;
console.log(this._isUpdate);
}
Editdetail(newDetail, i) {
  // this._newDetail.name=newDetail.name;
  // this._newDetail.email = newDetail.email;

  this.newDetail.name = newDetail.Name;


  console.log(newDetail.Name);

// }
//   NewData(forms: NgForm, i) {
//     this.newData.splice(this.index, 1, forms.value);
//     // this.newData.push(forms.value);
//     this.newDetail.name = '';
//     this._isUpdate = !this._isUpdate;
//     this.isEdit = !this.isEdit;

//   }
}
}
