import { Component, OnInit } from '@angular/core';
import { MoneyMovement } from '../Service/data.model';
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html'
})

export class EntryComponent implements OnInit {
  public entries: Array<Entry>;
  constructor(private entryService: EntryService) {
  }

  ngOnInit(): void {
    this.entries = this.entryService.entries;
  }

  deleteRecord(record: Entry): void {
    this.entryService.delete(record);
  }
}
