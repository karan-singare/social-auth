import {Component, OnInit} from '@angular/core';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {Plugins} from "@capacitor/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userInfo: any = null;
  constructor() {}

  ngOnInit(): void {
    GoogleAuth.initialize({
      clientId: '541915483304-542ghfs1h8dcqs1qmma9qffriqk9qhep.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }

  async googleSignIn() {
    try {
      const googleUser = await Plugins.GoogleAuth.signIn(null);
      this.userInfo = googleUser;
      console.log(googleUser);
    } catch (error) {
      console.log(error);
    }
  }
}
