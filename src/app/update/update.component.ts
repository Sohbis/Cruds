import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private instance: EmpServiceService ) { }
  get isEdit(): boolean {
    return this.instance.isEdit;
  }
  ngOnInit() {
  }

}
