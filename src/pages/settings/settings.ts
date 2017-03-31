import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SettingsService } from '../../providers/settings-service';

/*
 Generated class for the Settings page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  units;
  gender;
  location;

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsService: SettingsService) {
    this.units = settingsService.units;
    this.gender = settingsService.gender;
    this.location = "current-location";
  }

  save() {
    this.settingsService.setUnits(this.units);
    this.settingsService.setGender(this.gender);
  }

  ionViewWillLeave() {
    this.save();
  }
}
