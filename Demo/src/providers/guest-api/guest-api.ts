import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import {IGuest} from '../../interface/iguest';

/*
  Generated class for the GuestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GuestApiProvider {

  private baseUrl: string = '../../assets/api/Data.json';
  guest : IGuest[];
  
  constructor(public readonly http : HttpClient,private readonly platform : Platform) {
    console.log('Hello GuestApiProvider Provider');

    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/android_asset/www/assets/api/Data.json";
    }
  }

  getGuests(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
