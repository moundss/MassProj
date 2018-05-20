import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StorageTablesProvider} from '../../providers/storage-tables/storage-tables';
import {ITable} from '../../interface/iguest';

/**
 * Generated class for the AddtablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtable',
  templateUrl: 'addtable.html',
})
export class AddtablePage {
  designation:string;
  cle:string;
  matable: ITable[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private datastorage:StorageTablesProvider) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtablePage');
  }
  enregistre(){
    
    //this.cle='tab'+Date.now();
   this.matable=[{'designation':this.designation}];
    //this.matable.designation=this.designation;
    this.datastorage.save(this.matable);
    this.navCtrl.pop();
  console.log('ma clé est '+this.matable[0].designation+' '+this.designation);
  }
}
