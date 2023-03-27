import { Component,Input,Output,EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { faCoffee ,faSearch, faCog, faUser,faPowerOff} from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  export class DashboardComponent  
  { 
    faCoffee= faCoffee;
    faSearch=faSearch;
    faCog=faCog;
    faUser=faUser;
    faPowerOff=faPowerOff;
  }