import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/deals/deal.model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorited-deal',
  templateUrl: './favorited-deal.component.html',
  styleUrls: ['./favorited-deal.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateX(-50px)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class FavoritedDealComponent implements OnInit {
  @Input() favorite: Deal;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  onDeleteFavorite(id: number) {
    this.favoritesService.removeFromFavorites(id);
  }
}
