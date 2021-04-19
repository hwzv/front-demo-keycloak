// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

import { config } from "config";

export const environment = {
  production: false,
  isDebug: true,
  apiURL: config.apiUrl,
  apiCourse: "https://bbld5ga2od.execute-api.us-east-1.amazonaws.com/v1/course",
  domain: 'http://localhost:4200',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://keycloak-dev.utpxpedition.com/auth/',
    //issuer: 'http://localhost:8080/auth/',
    // Realm
    realm: 'xpedition-dev',   
    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'pao-web'
  }
};
