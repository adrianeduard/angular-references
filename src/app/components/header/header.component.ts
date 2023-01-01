import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {
  public state: any;

  constructor(
    protected stateService: StateService,
  ) {}

  ngOnInit(): void {
    this.state = this.stateService;
  }

  getCount() {
    return this.stateService.productCount;
  }
}
