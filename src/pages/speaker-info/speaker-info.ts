import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-speaker-info',
  templateUrl: 'speaker-info.html',
})
export class SpeakerInfoPage {
  constructor(private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
