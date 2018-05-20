import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import { TablesPage } from '../pages/tables/tables';
//import { InvitesPage } from '../pages/invites/invites';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TablesPageModule } from '../pages/tables/tables.module';
import { InvitesPageModule } from '../pages/invites/invites.module';
import { GuestApiProvider } from '../providers/guest-api/guest-api';
import { AddtablePageModule } from '../pages/addtable/addtable.module';
import { AddinvitePageModule } from '../pages/addinvite/addinvite.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailsinvitePageModule } from '../pages/detailsinvite/detailsinvite.module';
import { StorageTablesProvider } from '../providers/storage-tables/storage-tables';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    //ListPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot(),
    TablesPageModule,
    InvitesPageModule,AddtablePageModule,AddinvitePageModule,DetailsinvitePageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GuestApiProvider,
    StorageTablesProvider,StorageTablesProvider
  ]
})
export class AppModule {}
