import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'game-giveaways';

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
