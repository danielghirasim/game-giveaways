import { Component, Input, OnInit } from '@angular/core';
import { Deal } from '../../deal.model';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.scss'],
})
export class DealItemComponent implements OnInit {
  @Input() deal: Deal;
  dealOldPrice: string;

  constructor() {}

  ngOnInit() {
    this.dealOldPrice = this.deal.worth === 'N/A' ? '' : this.deal.worth;
  }
}
