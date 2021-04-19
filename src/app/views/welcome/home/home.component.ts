import { Component, OnInit } from '@angular/core';

import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = '';
  token? : string = '';
  profile?: KeycloakProfile;
  constructor(private ls: JwtAuthService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.ls.getUser();
    this.token  = this.ls.getJwtToken(); 
    this.profile = this.ls.getUserProfile();
    console.log('profile: ', this.profile);
    //console.log('token: ', this.token);
  }
}
