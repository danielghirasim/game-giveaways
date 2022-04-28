import { Component, Input, OnInit } from '@angular/core';
import { DealsService } from 'src/app/deals/deals.service';

@Component({
  selector: 'app-sort-item',
  templateUrl: './sort-item.component.html',
  styleUrls: ['./sort-item.component.scss'],
})
export class SortItemComponent implements OnInit {
  @Input() labelName: string;
  @Input() name: string;
  @Input() selectOptions: string[];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    console.log(event.target.value);
  }


}
