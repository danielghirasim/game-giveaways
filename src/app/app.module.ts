import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { HeaderComponent } from './header/header.component';
import { DealListComponent } from './deals/deal-list/deal-list.component';
import { DealItemComponent } from './deals/deal-list/deal-item/deal-item.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SortMenuComponent } from './sort-menu/sort-menu.component';
import { SortItemComponent } from './sort-menu/sort-item/sort-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritedDealsComponent } from './favorited-deals/favorited-deals.component';
import { FavoritedDealComponent } from './favorited-deals/favorited-deal/favorited-deal.component';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    HeaderComponent,
    DealListComponent,
    DealItemComponent,
    SortMenuComponent,
    SortItemComponent,
    FavoritedDealsComponent,
    FavoritedDealComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
