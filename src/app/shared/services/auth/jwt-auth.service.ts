import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "environments/environment";
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
// ================= only for demo purpose ===========
const DEMO_TOKEN =
  "";

const DEMO_USER: User = {
  id: "5b700c45639d2c0c54b354ba",
  displayName: "Watson Joyce",
  role: "SA",
};
// ================= you will get those data from server =======

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  token;
  isAuthenticated: Boolean;
  user: User = {};
  user$ = (new BehaviorSubject<User>(this.user));
  signingIn: Boolean;
  return: string;
  JWT_TOKEN = "JWT_TOKEN";
  APP_USER = "EGRET_USER";  
  APP_USER_FULL = "USER";  
  APP_PROFILE = "PROFILE";
  userDetails: KeycloakProfile;
  
  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private keycloakService: KeycloakService
  ) {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  public signin(username, password) {
    return of({token: DEMO_TOKEN, user: DEMO_USER})
      .pipe(
        delay(1000),
        map((res: any) => {
          this.setUserAndToken(res.token, res.user, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );

    // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER

    // this.signingIn = true;
    // return this.http.post(`${environment.apiURL}/auth/local`, { username, password })
    //   .pipe(
    //     map((res: any) => {
    //       this.setUserAndToken(res.token, res.user, !!res);
    //       this.signingIn = false;
    //       return res;
    //     }),
    //     catchError((error) => {
    //       return throwError(error);
    //     })
    //   );
  }

  /*
    checkTokenIsValid is called inside constructor of
    shared/components/layouts/admin-layout/admin-layout.component.ts
  */
  public checkTokenIsValid() {
    return of(DEMO_USER)
      .pipe(
        map((profile: User) => {
          this.setUserAndToken(this.getJwtToken(), profile, true);
          this.signingIn = false;
          return profile;
        }),
        catchError((error) => {
          return of(error);
        })
      );
    
    /*
      The following code get user data and jwt token is assigned to
      Request header using token.interceptor
      This checks if the existing token is valid when app is reloaded
    */

    // return this.http.get(`${environment.apiURL}/api/users/profile`)
    //   .pipe(
    //     map((profile: User) => {
    //       this.setUserAndToken(this.getJwtToken(), profile, true);
    //       return profile;
    //     }),
    //     catchError((error) => {
    //       this.signout();
    //       return of(error);
    //     })
    //   );
  }

  public signout() {    
    this.setUserAndToken(null, null, false);
    //this.router.navigateByUrl("sessions/signin");
    this.keycloakService.logout( environment.domain);
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return this.keycloakService.getKeycloakInstance().token;  
    //return this.ls.getItem(this.JWT_TOKEN);
  }

  getUserProfile() {
    return this.ls.getItem(this.APP_PROFILE);
    //return this.ls.getItem(this.JWT_TOKEN);
  }

  getUser() {
    //return this.keycloakService.getUsername();
    return this.ls.getItem(this.APP_USER);
  }

  public getUserName() {
    return this.keycloakService.getUsername();
    //return this.ls.getItem(this.APP_USER);
  }

  public getUserFullName() {  
    let user =  this.ls.getItem(this.APP_USER_FULL);
    console.log('userFullName', user);
    return user;
  }


  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    this.user$.next(user);
    this.ls.setItem(this.JWT_TOKEN, token);
    this.ls.setItem(this.APP_USER, user);
  }
}
