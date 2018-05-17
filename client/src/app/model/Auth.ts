const TOKEN: string = "token";
const EXPIRES_AT: string = "expires_at";

export class Auth {    
        constructor(parameters) {
        
    }

    static authenicateUser(token){
        if(token !== null ){
            localStorage.setItem(TOKEN, token)
        }        
    }

    static isUserAuthenticated(){
        return localStorage.getItem(TOKEN) !== null;
    }

    static deauthenticateUser(){
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(EXPIRES_AT);
    }

    static getToken(){
        return localStorage.getItem(TOKEN);
    }
}