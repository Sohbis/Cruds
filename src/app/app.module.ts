import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmpServiceService } from './emp-service.service';


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ListComponent } from './List/list.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path: 'Form', component: TemplateFormComponent },
  { path: 'List', component: ListComponent },
  { path: 'List/Update', component: UpdateComponent },
  { path: 'List/Update/List', component: ListComponent },

  { path: '', redirectTo: '/Form', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent, ListComponent, UpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ListComponent, EmpServiceService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
