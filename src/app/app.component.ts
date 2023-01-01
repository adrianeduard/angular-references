import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(stateService: StateService) {
    stateService.productCount = 10;
  }
}
