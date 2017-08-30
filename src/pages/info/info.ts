import { Component } from '@angular/core';
import { IonicPage, Tabs, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  tabsRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabsRef = this.navCtrl.parent;
  }

  goToSpeakers() {
    this.tabsRef.select(1);
  }

  goToCalendar() {
    this.tabsRef.select(2);
  }

  goToLocation() {
    this.tabsRef.select(3);
  }
}
