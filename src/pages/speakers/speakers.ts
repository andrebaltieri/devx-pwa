import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {
  public speakers: any[] = [];

  constructor(private modalCtrl: ModalController, data: DataProvider) {
    this.speakers = data.getSpeakers();
  }

  showInfo(speaker) {
    this.modalCtrl.create('SpeakerInfoPage', { speaker: speaker }).present();
  }
}
