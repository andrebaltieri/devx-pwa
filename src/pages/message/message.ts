import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  public pictures: any[] = [];

  constructor(private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    var video = <any>document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }

  }

  takePicture() {
    var video = <any>document.getElementById('video');
    var canvas = <any>document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 320, 240);

    video.classList.add('animated');
    video.classList.add('flash');
    setTimeout(() => {
      video.classList.remove('animated');
      video.classList.remove('flash');
      // video.style.display = 'none';
      // canvas.style.display = 'block';
    }, 1500);

    this.pictures.push({ data: canvas.toDataURL(), filter: 'nashvile' });
    this.pictures.push({ data: canvas.toDataURL(), filter: 'lark' });
    this.pictures.push({ data: canvas.toDataURL(), filter: 'willow' });
    this.pictures.push({ data: canvas.toDataURL(), filter: 'valencia' });
    this.pictures.push({ data: canvas.toDataURL(), filter: 'stinson' });
  }
}
