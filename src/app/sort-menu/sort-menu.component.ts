import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals/deals.service';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss'],
})
export class SortMenuComponent implements OnInit {
  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {}

  getPlatforms() {
    return this.dealsService.getPlatfroms();
  }

  getTypes() {
    return this.dealsService.getTypes();
  }

  getSorts() {
    return this.dealsService.getSorts();
  }

}
