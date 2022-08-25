import { Component, OnInit } from '@angular/core';
import { GpsService } from '../gps.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent implements OnInit {
  latitude:any;
  longitude:any;
  address:any;
  constructor(private gps: GpsService) { }

  ngOnInit(): void {
    this.getLocation();
     }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getCityName();
        }
      },
        (error: GeolocationPositionError) => alert("Geolocation is not enabled. Please enable to use this feature to continue!!"));
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCityName() {
    this.gps.getCityNameWithArcgis(this.latitude,this.longitude).subscribe(response=>{
      console.log(response);
      this.address =  JSON.stringify(response.address).replace('{','').replace('}','');
    })
  }

}
