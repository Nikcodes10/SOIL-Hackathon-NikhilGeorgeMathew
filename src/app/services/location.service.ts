import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPService } from './process-http.service';
import { LocSuggestion } from '../models/location';
import { CityDetails } from '../models/city-details';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient, private process: ProcessHTTPService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'user-key': '1df71cce230ec6fe4ca10e15ddb67d66'
    })
  };

  getSuggestedLocations(loc: string) {
  
    return this.http.get<LocSuggestion>('https://developers.zomato.com/api/v2.1/locations?query='+loc, this.httpOptions)
    .pipe(catchError(this.process.handleError));
  }

  getLocationDetails(e_id :string, e_type: string) {
    return this.http.get<CityDetails>('https://developers.zomato.com/api/v2.1/location_details?entity_id='+e_id + '&entity_type=' + e_type, this.httpOptions)
    .pipe(catchError(this.process.handleError));
  }

}
