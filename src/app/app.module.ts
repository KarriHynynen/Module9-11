import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

//welcome Page
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { ImageProvider } from '../providers/image/image';

const firebaseAuth = {
  apiKey: "AIzaSyA190GH8V8h8FbubPXeIhbaZ76DGut5jO0",
  authDomain: "labwork-8-4f162.firebaseapp.com",
  databaseURL: "https://labwork-8-4f162.firebaseio.com",
  projectId: "labwork-8-4f162",
  storageBucket: "labwork-8-4f162.appspot.com",
  messagingSenderId: "646353865776"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
   
    WelcomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireAuth,
    Camera,
    ImageProvider,
    
  ]
  
})
export class AppModule {}