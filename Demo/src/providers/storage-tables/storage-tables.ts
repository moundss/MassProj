import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ITable} from '../../interface/iguest';
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";

/*
  Generated class for the StorageTablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageTablesProvider {

  constructor(public http: HttpClient,private storage:Storage) {
    console.log('Hello StorageTablesProvider Provider');
  }
  getTables(): Observable<any[]> {
    return Observable.fromPromise(this.storage.get('table'))
        .map(data => {
            console.log(data);
            if (data !== null)
                return this.mapTables(data);
            else {
                let tables: ITable[] = [];
                return tables;
            }
        });
}

mapTables= (r: string): ITable[] => {
    return JSON.parse(r).map(this.toTable);
}

toTable = (r: any): ITable => {
    let table = <ITable>({
      idtab: r.idtab,
      designation: r.designation,
    });
    return table;
}

save(table): Observable<ITable[]> {
 var  identifiant='tab'+Date.now();
    let newTables = JSON.stringify(table);
    return Observable.fromPromise(this.storage.set(identifiant, newTables))
        .map(this.mapTables);
}

}
