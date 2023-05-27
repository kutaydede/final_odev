import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {

  latitude: number=0;
  longitude: number=0;
  distance: number=0;

  constructor(private geolocation: Geolocation) {}
  

  hesapla() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const currentLatitude = resp.coords.latitude;
      const currentLongitude = resp.coords.longitude;
      const distance = this.AradakiMesafeyihesapla(
        currentLatitude,
        currentLongitude,
        this.latitude,
        this.longitude
      );
      this.distance = distance;
    });
  }

  AradakiMesafeyihesapla(lat1: number, lon1: number, lat2: number, lon2: number) {
    // İki nokta arasındaki mesafeyi hesaplamak için Haversine formül uygulaması
    const R = 6371; // Dünyanın kilometre cinsinden yarıçapı
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  deg2rad(deg: number):number {
    return deg * (Math.PI / 180);

  }
}