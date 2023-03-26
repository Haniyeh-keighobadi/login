import { Component,Input,Output,EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
interface personalinfo{
  FirstName:string;
   LastName:string;

}
@Component({
    selector: 'app-login2',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.scss']
  })
  export class Login2Component  {
    
    ngOnInit(): void {
    }
    dataSource:any;
    dataSourceSelect:any;

    FirstName:string='';
    LastName:string='';
   
    personList:personalinfo[]=[];
   
    getDataGrid1() {

      let newperson:personalinfo={
        FirstName:this.FirstName,
        LastName:this.LastName,
      
      }}
 
 
  
  }