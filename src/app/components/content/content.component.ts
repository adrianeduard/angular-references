import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  constructor(
    protected stateService: StateService,
  ) {}

  handleClick() {
    this.stateService.productCount++;
  }
}
