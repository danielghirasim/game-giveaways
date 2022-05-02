import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DealsService } from '../deals/deals.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Deal } from '../deals/deal.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private dealsService: DealsService) {}

  fetchRecipes() {

    return this.http
      .get<Deal[]>(this.url, {
        headers: new HttpHeaders({
          'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
          'X-RapidAPI-Key':
            'e820e7bf01msh2e99322287fe05ep1a595djsn36cd08181907',
        }),
      })
      .pipe(
        tap((deals) => {
          this.dealsService.setDeals(deals);
        })
      );
  }

  testFetch() {
    return this.http.get('https://opentdb.com/api.php?amount=10');
  }
}
