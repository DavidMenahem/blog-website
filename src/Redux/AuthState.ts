import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Models/UserModel";

export class AuthState{

    token: string;
    user: UserModel;

    public constructor(){
        
        this.token = localStorage.getItem("token");
        if(this.token){
            const conatainer: { user: UserModel} = jwtDecode(this.token);
            this.user = conatainer.user;
            //console.log(this.token + "|" + this.user )
        }
    }
}

export enum AuthActionType{
    Register,
    Login,
    Logout
}

export interface AuthAction{
    type: AuthActionType;
    payload?: any;
}

export function registerAction(token: string): AuthAction{
    return{
        type: AuthActionType.Register,
        payload: token
    }
}

export function loginAction(token : string): AuthAction{
    return{
        type: AuthActionType.Login,
        payload: token
    }
}

export function logoutAction(): AuthAction{
    return{
        type: AuthActionType.Logout
    }
}

export function authReducer(currentState = new AuthState(),action: AuthAction): AuthState{
    const newState = {...currentState}

    switch(action.type){
        case AuthActionType.Register:
        case AuthActionType.Login:
        
        newState.token = action.payload;
        const container:{user: UserModel} = jwtDecode(action.payload);
        newState.user = container.user;
        localStorage.setItem("token",newState.token);
        break;

        case AuthActionType.Logout:
        newState.token = null;
        newState.user = null;
        localStorage.removeItem("token");
        break;
    }

    return newState;
}

export const authStore = createStore(authReducer);