import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deals/deal.model';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorited-deals',
  templateUrl: './favorited-deals.component.html',
  styleUrls: ['./favorited-deals.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FavoritedDealsComponent implements OnInit {
  // favoritedDeals: Deal[] = [
  //   {
  //     id: 1481,
  //     title: 'Castle Clash Starter Pack Key Giveaway',
  //     worth: '$200.00',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/626d824f88768.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/626d824f88768.jpg',
  //     description:
  //       'Claim your free Castle Clash Starter Pack Key ($200 Value) and unlock lots of in-game items for Castle Clash! Please note this giveaway is for new players only!',
  //     instructions:
  //       '1. Login into your free MMOBomb account and click the button to unlock your key.\r\n2. Follow the giveaway instructions to redeem your key.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/castle-clash-starter-pack-key-giveaway',
  //     published_date: '2022-04-30 20:39:11',
  //     type: 'DLC',
  //     platforms: 'PC, Android, iOS',
  //     end_date: '2022-05-31 23:59:00',
  //     users: 880,
  //     status: 'Active',
  //     gamerpower_url:
  //       'https://www.gamerpower.com/castle-clash-starter-pack-key-giveaway',
  //     open_giveaway:
  //       'https://www.gamerpower.com/open/castle-clash-starter-pack-key-giveaway',
  //   },
  //   {
  //     id: 1480,
  //     title: 'The Adventures of Tree',
  //     worth: '$4.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/626c561a7521e.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/626c561a7521e.jpg',
  //     description:
  //       'Claim a free copy of The Adventures of Tree via IndieGala! The Adventures of Tree is an open-ended adventure game about saving your fellow species from the evil invaders!',
  //     instructions:
  //       '1. Login into your free IndieGala account.\r\n2. Scroll down and click the "Add to Your Library" button to add the game to your library.\r\n3. Go to "My Library" to find your game.',
  //     open_giveaway_url:
  //       'https://www.gamerpower.com/open/the-adventures-of-tree',
  //     published_date: '2022-04-29 23:18:18',
  //     type: 'Game',
  //     platforms: 'PC, DRM-Free',
  //     end_date: 'N/A',
  //     users: 2030,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/the-adventures-of-tree',
  //     open_giveaway: 'https://www.gamerpower.com/open/the-adventures-of-tree',
  //   },
  //   {
  //     id: 1478,
  //     title: 'Mido and Di (Steam)',
  //     worth: '$5.99',
  //     thumbnail: 'https://www.gamerpower.com/offers/1/626c33937daf9.jpg',
  //     image: 'https://www.gamerpower.com/offers/1b/626c33937daf9.jpg',
  //     description:
  //       'Grab Mido and Di for free on Steam! Mido is a third-person shooter about an alien kid having nightmares about zombie aliens.',
  //     instructions:
  //       "1. Download directly via Steam before 2 May.\r\n2. That's it! Have fun!",
  //     open_giveaway_url: 'https://www.gamerpower.com/open/mido-and-di-steam',
  //     published_date: '2022-04-29 20:50:59',
  //     type: 'Game',
  //     platforms: 'PC, Steam',
  //     end_date: '2022-05-02 23:59:00',
  //     users: 4610,
  //     status: 'Active',
  //     gamerpower_url: 'https://www.gamerpower.com/mido-and-di-steam',
  //     open_giveaway: 'https://www.gamerpower.com/open/mido-and-di-steam',
  //   },
  // ];
  favoritedDeals: Deal[] = [];
  onChangeFavorites: Subscription;

  isListVisible = false;
  animationState = 'hidden';

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritedDeals = this.favoritesService.getFavoritedDeals();
    this.onChangeFavorites =
      this.favoritesService.favoritedDealsModified.subscribe(
        (deals: Deal[]) => {
          this.favoritedDeals = deals;
        }
      );
  }

  onShowFavorites() {
    this.isListVisible = !this.isListVisible;
    this.animationState === 'hidden'
      ? (this.animationState = 'visible')
      : (this.animationState = 'hidden');
  }
}
