import { Component } from '@angular/core';
import { Entry } from './entry/entry.model';
import { EntryService } from './entry/entry.service';
import { Expense } from './expense/expense.model';
import { ExpenseService } from './expense/expense.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  public title = 'Budget Available';
  public entries: Array<Entry> = [];
  public expenses: Array<Expense> = [];

  constructor(private entryService: EntryService,
    private expenseService: ExpenseService
  ) {
    this.entries = entryService.entries;
    this.expenses = expenseService.expenses;
  }

  getTotalEntry(): number {
    let totalEntry = 0;
    totalEntry = this.entries.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    return (totalEntry);
  }

  getTotalExpense(): number {
    let totalExpense = 0;
    totalExpense = this.expenses.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    return (totalExpense);
  }

  getTotalPercentage(): number {
    return this.getTotalExpense() / this.getTotalEntry();
  }

  getTotalBudget(): number {
    return this.getTotalEntry() - this.getTotalExpense();
  }
}
