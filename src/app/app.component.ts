import { Component, ViewChild } from '@angular/core';

import { Platform, ModalController, IonApp } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from './login/login.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  loginModal: HTMLIonModalElement;
  @ViewChild('myApp') myApp: IonApp;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private router: Router,
    private db: AngularFirestore,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      this.afAuth.authState.subscribe(user => {
        if (!user) {
          this.router.navigateByUrl(`/login`);
        }
        else {
          this.router.navigateByUrl(`/tabs`);
        }
      });
    });
  }
}
