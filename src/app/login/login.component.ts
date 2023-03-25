import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
 interface personalinfo{
  FirstName:string;
   LastName:string;
   Gender:string;
   Email:any;
   Password:any;
   Birthday:any;
}
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  
   export class LoginComponent  {
  //  form: FormGroup = new FormGroup({});

    constructor(
      private _snackBar: MatSnackBar,
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<LoginComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    ngOnInit(): void {
    }
    dataSource:any;
    dataSourceSelect:any;

    FirstName:string='';
    LastName:string='';
    Gender:string='';
    Email:any;
    Password:any;
    Birthday:any;
    personList:personalinfo[]=[];
   

    public dateChange(event: any, dateInput: any,picker:any) {
      debugger
      var faDate = dateInput.value;
      this.Birthday =  dateInput.value;
      moment.locale('fa');
      var enDateMomentFormat  = moment(faDate).locale('en');
      var enDate = new Date(enDateMomentFormat.toLocaleString());
      picker._validSelected = enDate;
      picker.startAt = enDate;
  }
    
    getDataGrid1() {

      let newperson:personalinfo={
        FirstName:this.FirstName,
        LastName:this.LastName,
        Gender:this.Gender,
        Email:this.Email,
        Password:this.Password,
        Birthday:this.Birthday
      }}
 
 
    onsubmit(){
      let newperson:personalinfo={
      FirstName:this.FirstName,
      LastName:this.LastName,
      Gender:this.Gender,
      Email:this.Email,
      Password:this.Password,
      Birthday:this.Birthday
    }
       if(this.Password ===undefined || this.Email ===undefined){
    
    this._snackBar.open( 'لطفا اطلاعات خود را کامل کنید','Close', {
      panelClass: 'app-notification-error',
    })
    }
    else{
       this.personList.push(newperson);
    this.dialogRef.close(this.personList);
       this._snackBar.open('اطلاعات شما ثبت شد','Close',  {
      panelClass: ['app-notification-success'],
      
    })
    }

   }
 
   ondelete():void{
    this.personList=[]
    this.FirstName='';
    this.LastName='';
    this.Gender='';
    this.Email='';
    this.Password='';
    this.Birthday='';
    console.log(this.personList);
   }
     
     }
     
    
     import * as moment from 'jalali-moment';
import { Platform } from '@angular/cdk/platform';
import { Dir } from '@angular/cdk/bidi';
import { MatSnackBar } from '@angular/material/snack-bar';
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

     export class CustomDateAdapter extends NativeDateAdapter {
      constructor(matDateLocale: string) {
        super(matDateLocale);
      }
   override format(date: Date, displayFormat: object): string {
        var faDate = moment(date.toDateString()).locale('fa').format('YYYY/MM/DD');
        return faDate;
      }
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
     //city select box 
  //       valueForAPI: any;
  //   dataSourceSelect: any;
  // dataSource:any;
  
  //    PeriodicElement : any;
  //   constructor(private http: HttpClient) {}
  //   title = 'api-angular';
  //   ngOnInit() {
  //     // API Call
  //     this.valueForAPI = '0';
  //     this.getDataGrid();
  //   }
  
  //   getDataGrid() {
  
  //     const body = { "Code": "Citys", "Columns": [], "Filters": [{"FieldName":"parent","Value":this.valueForAPI}] };
  //     let headers = new HttpHeaders({
  //       'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
  //       'x-rapidapi-key': 'your-api-key',
  //     });
  //     this.http
  //       .post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', body, {
  //         headers: headers,
  //       })
  //       .subscribe((res) => {
  //         this.dataSource=res.result.items;
  //         console.log(res);
  //         if (this.valueForAPI == '0') {
  //           this.dataSource = res.result.items;
  //         } else {
  //          this.dataSourceSelect = res.result.items;
  //          console.log(res);
  //         }
  //       });
  //   }
  
  
  // export class MyComponent{
  //   submit:any;
  // }
 
