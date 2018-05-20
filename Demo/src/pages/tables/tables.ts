import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddtablePage } from '../addtable/addtable';
import { StorageTablesProvider } from '../../providers/storage-tables/storage-tables'
/**
 * Generated class for the TablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {

  tables=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storageData:StorageTablesProvider) {
  }

 /* ngOnInit(): void {
    this.storageData.getTables().subscribe((data) => {
        this.tables = data;
        if (this.tables == null) {
            this.tables = [];
        }
    });
  }*/

  ionViewDidLoad() {
    this.storageData.getTables().subscribe((data) => {
      this.tables = data;
      if (this.tables == null) {
          this.tables = [];
      }
  });
    console.log('ionViewDidLoad '+this.tables[0]);
  }

  addtable(){
    this.navCtrl.push(AddtablePage)
  }
}
