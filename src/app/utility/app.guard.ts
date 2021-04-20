import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { LocalStoreService } from "../shared/services/local-store.service";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
    APP_USER = "USER"; 
    APP_PROFILE = "PROFILE";
    constructor( protected readonly router: Router, protected readonly keycloak: KeycloakService,  private ls: LocalStoreService,) {
        super(router, keycloak);
    }

  public async isAccessAllowed( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        // Force the user to log in if currently unauthenticated.
        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url,
            });
        }
        const requiredRoles = this.keycloak.getUserRoles();
        console.log('User roles coming after login from keycloak :', requiredRoles);
        let token = this.keycloak.getToken();
        console.log('get token :', token);
        let profile = await this.keycloak.loadUserProfile();   
        console.log('get profile :',  profile);   
        this.ls.setItem(this.APP_PROFILE, profile);
        this.ls.setItem(this.APP_USER, profile.firstName + ' ' + profile.lastName);    
        var tokenParsed = this.keycloak.getKeycloakInstance().tokenParsed['resource_access'];
        console.log('get roles from json :', tokenParsed);          
        // Allow the user to to proceed if no additional roles are required to access the route.
        if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
            return true;
        }

        // Allow the user to proceed if all the required roles are present.
        return requiredRoles.every((role) => this.roles.includes(role));
    }    
}