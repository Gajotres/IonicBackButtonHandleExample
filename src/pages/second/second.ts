import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FirstPage } from '../first/first';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})

export class SecondPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {

		platform.registerBackButtonAction(function(event){
			console.log('Prevent Back Button Page Change');
			// Maybe I need to do event.preventDefault();
		}, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file 
	}

	ionViewDidLoad() {
		console.log('SecondPage loaded!');
	}

	backToPreviousPage(event) {
	    this.navCtrl.setRoot(FirstPage);
	    this.navCtrl.popToRoot();   
	} 	
}
