import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { HeaderComponent } from './header/header.component';
import { DealListComponent } from './deals/deal-list/deal-list.component';
import { DealItemComponent } from './deals/deal-list/deal-item/deal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    HeaderComponent,
    DealListComponent,
    DealItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
