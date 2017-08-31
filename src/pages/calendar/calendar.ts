import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  public speakers: any[] = [];
  public day: string = 'one';

  constructor(private modalCtrl: ModalController, private data: DataProvider) {
    this.speakers = data.getSpeakers();
  }

  showInfo(id) {
    let speaker: any = {};

    this.speakers.forEach((item) => {
      if (item.id.toString() == id.toString()) {
        speaker = item;
      }
    });
    this.modalCtrl.create('SpeakerInfoPage', { speaker: speaker }).present();
  }
}
