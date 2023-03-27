import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CustomDateAdapter, LoginComponent} from "./login/login.component";
import { FormsModule } from '@angular/forms';
import {DatatableComponent} from "./datatable/datatable.component";
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{ CitytableComponent} from './citytable/citytable.component';
import {Login2Component} from "./login2/login2.component";
import{DashboardComponent}from"./dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
const appRoute:Routes=[
  {path:'login' ,component:Login2Component},
  {path:'home' ,component:DashboardComponent},
  {path:'main',component:DashboardComponent},
  {path:'user',component:DatatableComponent},
  {path:'search',component:CitytableComponent}
]

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatatableComponent,
    CitytableComponent,
    Login2Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatListModule,
    RouterModule.forRoot(appRoute),
    FontAwesomeModule,
    MatTabsModule,
    MatIconModule

  ],
  providers: [  { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
  { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }


