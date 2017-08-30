import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerInfoPage } from './speaker-info';

@NgModule({
  declarations: [
    SpeakerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerInfoPage),
  ],
})
export class SpeakerInfoPageModule {}
