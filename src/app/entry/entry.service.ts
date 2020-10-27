import { Entry } from './entry.model';

export class EntryService {
  public entries: Array<Entry> = [
    new Entry('Salary', 4000),
    new Entry('Selling Car', 500)
  ];

  delete(entry: Entry): void {
    const index: number = this.entries.indexOf(entry);
    this.entries.splice(index, 1);
  }
}
