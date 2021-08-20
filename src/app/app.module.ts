import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { RemoveQuoteComponent } from './remove-quote/remove-quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteInfoComponent,
    RemoveQuoteComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
