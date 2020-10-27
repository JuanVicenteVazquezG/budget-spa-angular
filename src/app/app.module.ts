import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { EntryComponent } from './entry/entry.component';
import { ExpenseComponent } from './expense/expense.component';

import { EntryService } from './entry/entry.service';
import { ExpenseService } from './expense/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    EntryComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EntryService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
