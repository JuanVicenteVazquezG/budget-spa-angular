import { Entry } from './entry.model';

export class EntryService
{
  public entries: Array<Entry> = [
    new Entry('Salario', 4000),
    new Entry('Selling Car', 500)
  ];
}
