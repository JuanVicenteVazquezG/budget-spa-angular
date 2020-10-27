import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  public title: string;
  @Input() totalBudget: number = 0;
  @Input() totalEntry: number= 0;
  @Input() totalExpense: number= 0;
  @Input() totalPercentage: number= 0;
  constructor() {
    this.title = 'Budget Available';

  }



}
