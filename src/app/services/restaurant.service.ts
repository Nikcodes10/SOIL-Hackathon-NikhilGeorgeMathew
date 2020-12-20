import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPService } from './process-http.service';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private process: ProcessHTTPService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'user-key': '1df71cce230ec6fe4ca10e15ddb67d66'
    })
  };

  getRestaurantById(r_id :string) {
    return this.http.get<Restaurant>('https://developers.zomato.com/api/v2.1/restaurant?res_id='+r_id, this.httpOptions)
    .pipe(catchError(this.process.handleError));
  }
}
