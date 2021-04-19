import { config } from "config";

export const environment = {
  production: true,
  isDebug: false,
  apiURL: config.apiUrl,
  apiCourse: "https://bbld5ga2od.execute-api.us-east-1.amazonaws.com/v1/course",
  domain: 'http://demo-pao-web.s3-website-us-east-1.amazonaws.com/',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://keycloak-dev.utpxpedition.com/auth/',
    // Realm
    realm: 'xpedition-dev',    
    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'pao-web'
  }
};