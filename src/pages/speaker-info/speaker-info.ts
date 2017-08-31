import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-speaker-info',
  templateUrl: 'speaker-info.html',
})
export class SpeakerInfoPage {
  public speaker: any = {};

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.speaker = this.navParams.get('speaker');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
