import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {
  constructor(private modalCtrl: ModalController) {
  }

  showInfo() {
    this.modalCtrl.create('SpeakerInfoPage', null).present();
  }
}
