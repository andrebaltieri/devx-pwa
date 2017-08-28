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

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    this.speakers = data.getSpeakers();
  }
}
