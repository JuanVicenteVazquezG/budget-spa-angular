import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry } from '../entry/entry.model';
import { EntryService } from '../entry/entry.service';
import { Expense } from '../expense/expense.model';
import { ExpenseService } from '../expense/expense.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public description: string;
  public qty: number;
  public sign: string;
  public typeOperation = 'EntryOperation';

  constructor(private entryService: EntryService,
              private expenseService: ExpenseService) {
  }

  onAddEntryOrExpense(event): void {
    event.preventDefault();
    if (this.description.trim() === '') { return; }
    if (this.qty <= 0) { return; }
    if (this.typeOperation === 'EntryOperation') {
      this.entryService.entries.push(new Entry
        (
          this.description, this.qty
        ));
    }
    else {
      this.expenseService.expenses.push(new Expense
        (
          this.description,
          this.qty
        ));
    }



    this.description = '';
    this.qty = 0;
  }


  ngOnInit(): void {
    this.description = '';
    this.qty = 0;
    this.sign = '+';
  }

  operationType(event): void {
    this.typeOperation = event.target.value;
  }

}
