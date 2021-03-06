import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmpServiceService } from './emp-service.service';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ListComponent } from './List/list.component';
import { UpdateComponent } from './update/update.component';
import { baseURL } from './baseurl';
import {environment} from '../environments/environment';

const appRoutes: Routes = [
  { path: 'Form', component: TemplateFormComponent },
  { path: 'List', component: ListComponent },
  { path: 'Update/:id', component: UpdateComponent },
  { path: '**', redirectTo: '/Form', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent, ListComponent, UpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true }),
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, AngularFireAuthModule 
  ],
  providers: [ListComponent, EmpServiceService, {provide: 'BaseURL', useValue: baseURL}
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
