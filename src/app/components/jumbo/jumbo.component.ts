import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { LocSuggestion } from '../../models/location';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss'],
})
export class JumboComponent implements OnInit {

  suggestions :LocSuggestion;
  noResult :boolean = false;

  constructor(private ls: LocationService, private router: Router) { }

  ngOnInit(): void {
  }

  searchQuery(loc:string) {
    this.ls.getSuggestedLocations(loc).subscribe(results=> {
      this.suggestions = results;
      if(!this.suggestions.location_suggestions.length) {
        this.noResult = true;
      }
      else {
        this.noResult = false;
      }
    });
  }

  reset() {
    this.suggestions=null;
  }

  goto(e_type: string, e_id: string) {
    this.router.navigate(['city/'+e_type+'/'+e_id]);
  }
}
