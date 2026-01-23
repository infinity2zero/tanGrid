import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery, BreweryParams } from '../models/brewery.model';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private apiUrl = 'https://api.openbrewerydb.org/v1/breweries';

  constructor(private http: HttpClient) { }

  getBreweries(params: BreweryParams = {}): Observable<Brewery[]> {
    let httpParams = new HttpParams();
    
    Object.keys(params).forEach(key => {
      const value = (params as any)[key];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return this.http.get<Brewery[]>(this.apiUrl, { params: httpParams });
  }

  getMeta(params: BreweryParams = {}): Observable<{ total: number }> {
    let httpParams = new HttpParams();
    
    Object.keys(params).forEach(key => {
      // meta endpoint doesn't support page/per_page/sort for counting (usually), but filters are key.
      // We keep filters like by_name, by_type, etc.
      // We exclude pagination params to get the *total* count of matches.
      if (['page', 'per_page', 'sort'].includes(key)) return;

      const value = (params as any)[key];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return this.http.get<{ total: number }>(`${this.apiUrl}/meta`, { params: httpParams });
  }

  searchBreweries(query: string, page: number = 1, perPage: number = 10): Observable<Brewery[]> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<Brewery[]>(`${this.apiUrl}/search`, { params });
  }
}
