import { Component, Input, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {
  public expenses: Array<Expense>;
  @Input() totalEntry: number;
  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expenses = this.expenseService.expenses;
  }

  deleteRecord(record: Expense): void {
    this.expenseService.delete(record);
  }

  calcPercentage(expense: Expense): number{
    return expense.value / this.totalEntry;
  }

}


