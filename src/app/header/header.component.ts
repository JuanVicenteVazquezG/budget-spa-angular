import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  public title: string;
  public totalEntries: number;
  public totalExpenses: number;
  public totalBudget: number;

  constructor() {
    this.title = 'Budget Available';
    this.totalEntries = 0;
    this.totalExpenses = 0;
    this.totalBudget = this.totalEntries - this.totalExpenses;
  }



}
