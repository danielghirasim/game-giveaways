import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal.model';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
})
export class DealListComponent implements OnInit {
  deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit() {
    this.deals = this.dealsService.getDeals();
    // // Enable for API Requests
    // this.dealsService.dealsModified.subscribe((deals) => {
    //   this.deals = deals;
    // });
  }
}
