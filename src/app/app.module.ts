import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { StatusesService } from './statuses/statuses.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusesComponent } from './statuses/statuses.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAQ0o6x-7Qwu_FQeqqjhx6U8HVpQQ4ao0M",
  authDomain: "statusupdateapp-f97a9.firebaseapp.com",
  databaseURL: "https://statusupdateapp-f97a9.firebaseio.com",
  projectId: "statusupdateapp-f97a9",
  storageBucket: "",
  messagingSenderId: "381281780656"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
