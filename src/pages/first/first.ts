import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SecondPage } from '../second/second';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})

export class FirstPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

	changePage(event) {
		// Change page so we can test hardware backbutton changes
		this.navCtrl.push(SecondPage);
	} 
}
