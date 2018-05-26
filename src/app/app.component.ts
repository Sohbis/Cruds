import { Component } from '@angular/core';
import { EmpServiceService } from './emp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private instance: EmpServiceService) { }
  get isEdit(): boolean {
    return this.instance.isEdit;
  }
}

