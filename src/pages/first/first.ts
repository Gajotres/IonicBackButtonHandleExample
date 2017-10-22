import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SecondPage } from '../second/second';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})

export class FirstPage {

	constructor(public navCtrl: NavController) {

	}

	changePage(event) {
		// Change page so we can test hardware backbutton changes
		this.navCtrl.push(SecondPage);
	} 
}