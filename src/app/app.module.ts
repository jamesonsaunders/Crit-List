import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { LoginPage } from './pages/login/login.page';
import { LoginPageModule } from './pages/login/login.module';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { ConstantService } from './providers/contstant/constant.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    LoginPageModule,
    TabsPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ConstantService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
