import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddinvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addinvite',
  templateUrl: 'addinvite.html',
})
export class AddinvitePage {
  designation:string;
  table:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddinvitePage');
  }
  enregistre(){
    console.log('invité '+this.designation+' est assis à la table '+this.table);
  }
}
