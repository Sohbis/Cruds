import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Employee } from '../Model/employee.model';
import { Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user = this.instance.value;

  // empdata: Employee[] = [];
  constructor(private instance: EmpServiceService,
    private route: ActivatedRoute ) { }
  
    get isEdit(): boolean {
    return this.instance.isEdit;
  }
  ngOnInit() {
    this.route.params.switchMap((params: Params) => { return this.instance.EmpData(+params['id']);
  }).subscribe(emp=>this.user=emp);
  }
Update(form: NgForm) {

this.instance.UpdateEmp(form.value).subscribe(emp => console.log(form.value));
}
}
