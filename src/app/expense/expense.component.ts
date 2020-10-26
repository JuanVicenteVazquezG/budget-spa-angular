import { Component, OnInit } from '@angular/core';
import { MoneyMovement } from '../Service/data.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {
  public expenses: Array<MoneyMovement>;

  constructor() {

  }

  ngOnInit(): void {
    this.expenses = [];
  }

}


