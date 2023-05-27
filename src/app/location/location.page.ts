import { Component, OnInit } from '@angular/core';
import { Geolocation  } from '@awesome-cordova-plugins/geolocation/ngx';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {

  latitude:any;
  longitude: any;
  distance: any;
  currentLocation: string | undefined ;
  constructor(private geolocation: Geolocation,private modalCtrl : ModalController) {}
  hesapla() {
    this.geolocation.getCurrentPosition().then((resp: GeolocationPosition) => {
      const currentLatitude = resp.coords.latitude;
      const currentLongitude = resp.coords.longitude;
      const distance = this.AradakiMesafeyihesapla(
        currentLatitude,
        currentLongitude,
        this.latitude,
        this.longitude
      );
      this.distance = distance;
  
      // Mevcut konumu daha büyük noktalı bir şekilde currentLocation değişkenine ata
      this.currentLocation = `${currentLatitude.toFixed(8)}, ${currentLongitude.toFixed(8)}`;
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
  close(){
    this.modalCtrl.dismiss()
  }
}