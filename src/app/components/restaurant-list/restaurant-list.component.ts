import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CityDetails } from 'src/app/models/city-details';
import { Restaurant } from 'src/app/models/restaurant';
import { LocationService } from 'src/app/services/location.service';
import { default_image } from '../../shared/default';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  e_id :string;
  e_type :string;
  loc_details :CityDetails;
  restaurants : Restaurant[] = [];
  default = default_image;

  constructor(private route: ActivatedRoute, private ls: LocationService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.e_id = this.route.snapshot.paramMap.get('id');
    this.e_type = this.route.snapshot.paramMap.get('entity');

    this.ls.getLocationDetails(this.e_id, this.e_type).subscribe(details=>{
      this.loc_details = details;
      let i=0;
      this.loc_details.best_rated_restaurant.forEach(res => {
        if(i>=5) {
          return;
        }
        this.restaurants.push(res.restaurant);
        i++;
      });
      this.spinner.hide();
    });
  }

  goHome() {
    this.router.navigate(['home']);
  }
  gotoRes(id :string) {
    this.router.navigate(['restaurant/'+id]);
  }
}
