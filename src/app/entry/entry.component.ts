import { Component, OnInit } from '@angular/core';
import { MoneyMovement } from '../Service/data.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html'
})

export class EntryComponent implements OnInit {
  public entries: Array<MoneyMovement>;
  constructor() {
  }

  ngOnInit(): void {
    this.entries = [];
  }
}
