import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal.model';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
})
export class DealListComponent implements OnInit, OnDestroy {
  deals: Deal[] = [];
  dealsSubscription: Subscription;

  constructor(private dealsService: DealsService) {}

  ngOnInit() {
    this.deals = this.dealsService.getDeals();
    this.dealsSubscription = this.dealsService.dealsModified.subscribe(
      (deals) => (this.deals = deals)
    );
    // // Enable for API Requests
    // this.dealsService.dealsModified.subscribe((deals) => {
    //   this.deals = deals;
    // });
  }

  ngOnDestroy(): void {
    this.dealsSubscription.unsubscribe();
  }
}
