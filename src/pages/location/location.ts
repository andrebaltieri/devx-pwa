import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  public location: string = '';

  constructor(private toastCtrl: ToastController) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.location = data.coords.latitude + ',' + data.coords.longitude;
        var html = '<iframe style="height: 100vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCgDA9rG9_6GwMAOlGVyMHnnvc_WMIAFd8&origin=' + data.coords.latitude + ',' + data.coords.longitude + '&destination=-23.5579778,-46.6688917" allowfullscreen></iframe>';
        document.getElementById('map').innerHTML = html;
      }, (err) => {
        this.showLocationError(err);
      });
    } else {
      this.showLocationError('');
    }
  }

  showLocationError(err) {
    this.toastCtrl.create({ message: 'Não foi possível obter sua localização' }).present();
  }
}
