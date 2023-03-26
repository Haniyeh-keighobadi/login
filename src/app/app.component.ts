import { Component } from '@angular/core';
import { faCoffee ,faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  faCoffee=faCoffee;
  faSearch=faSearch;
}
