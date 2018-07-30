import { Injectable } from '@angular/core';
import { Employee } from './Model/employee.model';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from './baseurl';
import { stringify } from 'querystring';

@Injectable()
export class EmpServiceService {

  value: Employee = new Employee();
  isUpdate = false;
  url: string;
  isEdit = false;

  _isUpdate = false;
  constructor(private http: Http) { }

  postEmp(value): Observable<Employee[]> {
    console.log(value);
    return this.http.post(baseURL + 'list', value).map(res => res.json());

  }

  getData(): Observable<Employee[]> {
    console.log('called');
    return this.http.get(baseURL + 'list').map(res => res.json());
  }

  EmpData(id: number): Observable<Employee> {
    this.url = baseURL + 'list/' + id;
    return this.http.get(this.url).map(res => res.json());
  }

  UpdateEmp(value): Observable<Employee[]> {

    return this.http.put(this.url, value).map(res => res.json());

  }

  DeleteEmp(value): Observable<Employee[]> {
    return this.http.delete(baseURL + 'list/' + value.id, value).map(res => res.json());

  }
  Edit(isUpdate) {
    this._isUpdate = isUpdate;
    console.log(this._isUpdate);
  }

}
