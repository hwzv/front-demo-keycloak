import { KeycloakService } from 'keycloak-angular';
import { environment  } from "../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () => 
        keycloak.init({            
            config: {
                url: environment.keycloak.issuer,
                realm: environment.keycloak.realm,
                clientId: environment.keycloak.clientId
            },
            initOptions: {
                checkLoginIframe: false, 
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        }); 
}