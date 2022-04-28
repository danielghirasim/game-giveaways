import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DealsService } from '../deals/deals.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Giveaway } from '../shared/giveaway.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private dealsService: DealsService) {}

  fetchRecipes() {
    return this.http.get<Giveaway[]>(this.url).pipe(map((giveaways) => {
      
    }));
  }
}
