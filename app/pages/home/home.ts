import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {GoogleMapService} from "../../services/map.google"
declare var cordova: any;
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public googleMap: GoogleMapService) {
  }


  ngOnInit() {
    Geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(res => {
      console.log("res", res);
      this.googleMap.mapInit(res.coords.latitude, res.coords.longitude);
    })
      .catch(this.onError);
  }

  onError(error) {  
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  }

}
