import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { default_image } from '../../shared/default';
import { NgxSpinnerService } from "ngx-spinner";
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  r_id :string;
  restaurant: Restaurant ;
  default = default_image;

  constructor(private route: ActivatedRoute, private loc: Location, private rs: RestaurantService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.r_id = this.route.snapshot.paramMap.get('id');
    this.rs.getRestaurantById(this.r_id).subscribe(res=> {
      this.restaurant = res;
      this.spinner.hide();
    });
  }

  goBack() {
    this.loc.back();
  }
}
