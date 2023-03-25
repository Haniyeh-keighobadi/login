import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { OnInit,ChangeDetectorRef  } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { skip } from 'rxjs';
  export interface PeriodicElement {
    id:number;
    parent:string;
    title:string;
  }
  
@Component({
    selector: 'app-citytable',
    templateUrl: './citytable.component.html',
    styleUrls: ['./citytable.component.scss']
  })
  
  export class CitytableComponent implements OnInit {
    paginator1:any
    displayedColumns: string[] = [ 'id','parent','title'];
   dataSource:PeriodicElement[]=[];
    dataSourceSelect: any;
    @ViewChild(MatPaginator)
    paginator:MatPaginator;
    resultsLength:number;
   // dataSource = new MatTableDataSource<any[]>();
   pageindex:number=0;

    constructor(private http: HttpClient) {}
    title = 'api-angular';
    
  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }

  changePage(e:any){
    debugger
    const body = { "Code": "Citys", "Columns": [], "Filters": [{"FieldName":"parent","Value":"1"}] ,Take:10,Skip:e.pageSize* e.pageIndex};
    this.getData(body);
  }

  getData(body:any){
   
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });
    this.http.post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', body, {
        headers: headers,
      })
      .subscribe((res) => {
          this.resultsLength = res.result.totalCount;
          this.dataSource= res.result.items;
    
         console.log(res);
        
      });
  }

    ngOnInit() {
       // this.dataSource.paginator=this.paginator;
    //   this.data = new MatTableDataSource(this.EmpData);
    //   this.dataSource.paginator = this.paginator;
     // this.dataSource=[]
     const body = { "Code": "Citys", "Columns": [], "Filters": [{"FieldName":"parent","Value":"1"}] ,Take:10};
      this.getData(body);
    }
  
 
    }

 