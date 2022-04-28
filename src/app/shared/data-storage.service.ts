import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DealsService } from '../deals/deals.service';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs';
import { Deal } from '../deals/deal.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private dealsService: DealsService) {}

  fetchRecipes() {
    return this.http.get<Deal[]>(this.url).pipe(
      tap((deals) => {
        console.log('fetching');
        console.log(deals);
        this.dealsService.setDeals(deals);
      })
    );
    // return this.http.get<Deal[]>(this.url);
  }

  testFetch() {
    return this.http.get('https://opentdb.com/api.php?amount=10');
  }
}
