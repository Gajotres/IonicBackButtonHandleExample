import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstPage } from '../pages/first/first';
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = FirstPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();

            platform.registerBackButtonAction(function(event){
                console.log("Back button pressed!");

                let nav = this.app.getActiveNav();

                if (nav.canGoBack()){ // We can go back so go back
                    nav.pop();
                } else {

                    const alert = this.alertCtrl.create({
                        title: 'Confirm purchase',
                        message: 'Do you want to buy this book?',
                        buttons: [{
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('Application exit prevented!');
                            }
                        },{
                            text: 'Close App',
                            handler: () => {
                                this.platform.exitApp(); // Close this application
                            }
                        }]
                    });
                    alert.present();
                }
            }, 100);      
        });
    }
}