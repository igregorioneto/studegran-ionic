import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly navCtrl: NavController,
  ){}

  canActivate() {
    const user = localStorage.getItem('studegran.user');
    if (!user) {
      this.navCtrl.navigateRoot('login');
      return false;
    }

    return true;
  }

}
