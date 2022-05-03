import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Deal } from '../deals/deal.model';
import { DealsService } from '../deals/deals.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favoritedDealsModified = new Subject<Deal[]>();
  favoritedDeals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  getFavoritedDeals() {
    return [...this.favoritedDeals];
  }

  addToFavorites(id: number) {
    const newFavorite = this.dealsService.getDeal(id);
    this.favoritedDeals.push(...newFavorite);
    this.favoritedDealsModified.next([...this.favoritedDeals]);
    this.dealsService.setFavorite(id);
  }

  removeFromFavorites(id: number) {
    this.favoritedDeals = this.favoritedDeals.filter((deal) => deal.id !== id);
    this.favoritedDealsModified.next([...this.favoritedDeals]);
    this.dealsService.removeFavorite(id);
  }
}
