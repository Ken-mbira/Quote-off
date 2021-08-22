import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { RemoveQuoteComponent } from './remove-quote/remove-quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteLifePipe } from './quote-life.pipe';
import { VoteCounterComponent } from './vote-counter/vote-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteInfoComponent,
    RemoveQuoteComponent,
    QuoteFormComponent,
    QuoteLifePipe,
    VoteCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
