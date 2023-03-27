import { Component,Input,Output,EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
//import { DialogData } from '../login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
interface personalinfo{
  username:string;
   password:string;

}
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
    selector: 'app-login2',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.scss']
  })
  export class Login2Component  {
    
    // constructor(
    //   private _snackBar: MatSnackBar,
    //   private fb: FormBuilder,
    //   public dialogRef: MatDialogRef<Login2Component>,
    //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // ) {}

    ngOnInit(): void {
    }

    username:string='';
    password:string='';
    personList:personalinfo[]=[];
   
    getDataGrid1() {

      let newperson:personalinfo={
        username:this.username,
        password:this.password,
      
      }}
      onsubmit(){
        let newperson:personalinfo={
          username:this.username,
          password:this.password,
        
       
        }
        if(this.username==='h.keighobadi'&&this.password==='123456'){

        }
        else{
    // this._snackBar.open( 'لطفا اطلاعات خود را کامل کنید','Close', {
    //   panelClass: 'app-notification-error',
    // })
    
        }
      }
    
      }
 
 
  
  