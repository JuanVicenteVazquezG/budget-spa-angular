import { Expense } from './expense.model';


export class ExpenseService {
  public expenses: Array<Expense> = [
    new Expense('Rent House', 900),
    new Expense('Clothing', 200)
  ];

  delete(expense: Expense): void {
    const index: number = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
  }
}
