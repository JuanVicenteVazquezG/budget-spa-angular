import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoneyMovement, totalBudgetMovements } from '../Service/data.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public description: string;
  public qty: number;
  public sign: string;


  constructor() {
  }

  onAddEntryOrExpense(): void {
    if (this.description.trim() === '') { return; }
    if (this.qty < 0) { return; }
    if (this.sign === '-') { this.qty *= -1; }
    const movement: MoneyMovement = { qty: this.qty, description: this.description };
    totalBudgetMovements.push(movement);
    console.log('totalBudgetMovements', totalBudgetMovements);

    this.description = '';
    this.qty = 0;
  }


  ngOnInit(): void {
    this.description = '';
    this.qty = 0;
    this.sign = '+';
  }

}
