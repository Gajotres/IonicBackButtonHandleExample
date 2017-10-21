import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})

export class SecondPage {

    // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
    public unregisterBackButtonAction: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

	}

	ionViewDidLoad() {
		this.initializeBackButtonCustomHandler();
	}

    ionViewWillLeave() {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }

    initializeBackButtonCustomHandler(): void {
		this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
			console.log('Prevent Back Button Page Change');
		}, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    }    	
}
