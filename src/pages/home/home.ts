import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  map = {
    cols: 8,
    rows: 8,
    tsize: 120
  }

  layer_1 = {
    tiles: [
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1
    ],
    tindex: {
      0: 'empty',
      1: 'soil',
      2: 'send',
      3: 'tree'
    }
  }

  layer_2 = {
    tiles: [
      1, 3, 3, 3, 1, 1, 3, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 2, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 2, 1, 1, 1, 1,
      1, 1, 1, 1, 2, 1, 1, 1,
      1, 1, 1, 1, 2, 1, 1, 1,
      1, 1, 1, 1, 2, 1, 1, 1
    ],
    tindex: {
      0: 'empty',
      1: 'empty',
      2: 'bush',
      3: 'tree'
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}