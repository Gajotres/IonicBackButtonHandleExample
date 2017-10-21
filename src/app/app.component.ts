import { Component } from '@angular/core';
import { App, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstPage } from '../pages/first/first';
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = FirstPage;

    constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public  app: App, public alertCtrl: AlertController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();

            platform.registerBackButtonAction(() => {

                let nav = app.getActiveNavs()[0];
                let activeView = nav.getActive();                

                if(activeView.name === "FirstPage") {

                    console.log('Trigger');

                    if (nav.canGoBack()){ //Can we go back?
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
                }
            });
        });
    }
}