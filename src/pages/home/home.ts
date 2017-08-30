import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public speakers: any[] = [];

  infoTab: string;
  calendarTab: string;
  speakersTab: string;
  locationTab: string;
  messageTab: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    this.speakers = data.getSpeakers();
    this.infoTab = 'InfoPage';
    this.calendarTab = 'CalendarPage';
    this.speakersTab = 'SpeakersPage';
    this.locationTab = 'LocationPage';
    this.messageTab = 'MessagePage';
  }
}
