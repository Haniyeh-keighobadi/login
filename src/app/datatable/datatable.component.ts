import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { OnInit,ChangeDetectorRef  } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
//import { PeriodicElement } from '../app.component';
  export interface DialogData {}
  
@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
  })
  
  export class DatatableComponent  {
    searchtext:any;
    panelOpenState = false;
    displayedColumns: string[] = [ 'FirstName','LastName','Email','Password','Gender','Birthday'];
   // data: any[] = []
   dataOrginal:any[]=[];
    data = [{Birthday:'',
      Email
      : 
      "sadaf@gmail.com",
      FirstName
      : 
      "صدف",
      Gender
      : 
      "زن",
      LastName
      : 
      "سفری",
      Password
      : 
      "1234"}];

      

    constructor(public dialog: MatDialog) {}
    @ViewChild(MatTable) table: MatTable<any>;
    openDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {});
  
      dialogRef.afterClosed().subscribe(result => {
        debugger
        console.log('The dialog was closed Data',result);
        if(result){
        this.data.push(result[0]);
          this.dataOrginal = JSON.parse(JSON.stringify(this.data));
        }
       
         this.table.renderRows();
      
      });
    }

    search(){
      if(this.searchtext != ''){
        this.data = this.dataOrginal.filter(c=>c.FirstName == this.searchtext)
      }else{
        this.data = this.dataOrginal;
      }
    }
 

       }