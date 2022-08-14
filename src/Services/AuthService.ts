import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { authStore, loginAction, logoutAction, registerAction } from "../Redux/AuthState";
import appConfig from "../Utils/Config";

class AuthService{

    public async register(user: UserModel): Promise<void>{
        const response = await axios.post<string>(appConfig.registerUrl,user);
        const token = response.data;
        authStore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void>{
        const response = await axios.post<string>(appConfig.loginUrl,credentials);
        const token = response.data;
        authStore.dispatch(loginAction(token));
    }

    public logout(){
        authStore.dispatch(logoutAction())
    }

}

const authService = new AuthService();

export default authService;