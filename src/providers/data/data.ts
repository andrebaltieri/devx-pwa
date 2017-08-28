import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
  getSpeakers() {
    return [
      { name: 'Rodrigo Kono', image: 'assets/images/rodrigokono.jpg', },
      { name: 'André Baltieri', image: 'assets/images/andrebaltieri.png', },
      { name: 'Angelo Belchior', image: 'assets/images/angelobelchior.png', },
    ]
  }
}
