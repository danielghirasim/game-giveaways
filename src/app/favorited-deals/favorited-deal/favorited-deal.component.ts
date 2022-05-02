import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/deals/deal.model';

@Component({
  selector: 'app-favorited-deal',
  templateUrl: './favorited-deal.component.html',
  styleUrls: ['./favorited-deal.component.scss'],
})
export class FavoritedDealComponent implements OnInit {
  @Input() favorite: Deal;

  constructor() {}

  ngOnInit(): void {}
}
