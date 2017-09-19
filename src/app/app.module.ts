import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAQ0o6x-7Qwu_FQeqqjhx6U8HVpQQ4ao0M",
  authDomain: "statusupdateapp-f97a9.firebaseapp.com",
  databaseURL: "https://statusupdateapp-f97a9.firebaseio.com",
  projectId: "statusupdateapp-f97a9",
  storageBucket: "",
  messagingSenderId: "381281780656"
};

// <script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAQ0o6x-7Qwu_FQeqqjhx6U8HVpQQ4ao0M",
//     authDomain: "statusupdateapp-f97a9.firebaseapp.com",
//     databaseURL: "https://statusupdateapp-f97a9.firebaseio.com",
//     projectId: "statusupdateapp-f97a9",
//     storageBucket: "",
//     messagingSenderId: "381281780656"
//   };
//   firebase.initializeApp(config);
// </script>

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
