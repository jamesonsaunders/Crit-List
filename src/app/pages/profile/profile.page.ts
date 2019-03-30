import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConstantService } from 'src/app/providers/contstant/constant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};

  constructor(private afAuth: AngularFireAuth, public constant: ConstantService,) {
    this.afAuth.authState.subscribe(user => {
      if (user)
        this.user = user;
    });
  }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}
