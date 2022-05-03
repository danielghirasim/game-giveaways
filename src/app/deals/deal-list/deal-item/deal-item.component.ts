import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/favorited-deals/favorites.service';
import { Deal } from '../../deal.model';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.scss'],
})
export class DealItemComponent implements OnInit {
  @Input() deal: Deal;
  dealOldPrice: string;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.dealOldPrice = this.deal.worth === 'N/A' ? '' : this.deal.worth;
  }

  onFavorite(id: number) {
    if (this.deal.isFavorite === false || this.deal.isFavorite === undefined)
      this.favoritesService.addToFavorites(id);
    if (this.deal.isFavorite === true)
      this.favoritesService.removeFromFavorites(id);
  }
}
