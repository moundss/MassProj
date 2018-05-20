import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddinvitePage } from '../addinvite/addinvite';
import { GuestApiProvider } from '../../providers/guest-api/guest-api';
import { DetailsinvitePage } from '../detailsinvite/detailsinvite';

/**
 * Generated class for the InvitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invites',
  templateUrl: 'invites.html',
})
export class InvitesPage {
  guests=[];
  //searchbar
  searchQuery: string = '';
  items= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private datainvt_api:GuestApiProvider) {
    if( (this.guests)!=null){
      this.chargmnt();
      this.initializeItems();
    }
    this.initializeItems();
  }



  initializeItems() {
    /*for(var elmnt of this.guests){
      this.items=[elmnt.designation];
    }*/
    this.items=this.guests;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.Designation.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  chargmnt() {
    console.log('chargmnt MesinvitesPage');

    this.datainvt_api.getGuests().subscribe(data=>
      {
       this.guests= data;
      });
  }

  itemSelected(item) {
   this.navCtrl.push(DetailsinvitePage,item);
  }
  addguest(){
    this.navCtrl.push(AddinvitePage);
  }

}
