import { Expense } from './expense.model';


export class EntryService {
  public Expenses: Array<Expense> = [
    new Expense('Rent House', 900),
    new Expense('Clothing', 200)
  ];
}
