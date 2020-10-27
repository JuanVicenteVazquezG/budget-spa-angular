import { Expense } from './expense.model';


export class ExpenseService {
  public expenses: Array<Expense> = [
    new Expense('Rent House', 900),
    new Expense('Clothing', 200)
  ];
}
