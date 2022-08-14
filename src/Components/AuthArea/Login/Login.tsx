import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notificationService from "../../../Services/NotificationService";
import "./Login.css";

function Login(): JSX.Element {

    const { register, handleSubmit, formState} = useForm<CredentialsModel>();

    const navigate = useNavigate();

    async function send(credentials: CredentialsModel){
        try{
            await authService.login(credentials);
            notificationService.success("Welcome Back!");
            navigate("/home");
        }catch(err: any){
            notificationService.error(err);
        }

    }
    return (
        <div className="Login Box">
			<form onSubmit={handleSubmit(send) } >
                <h3>Login</h3>
                <br />
                <label>Username:</label>
                <input type="text"{...register("username",{
                    required:{value:true,message:"username is required"},
                    minLength:{value: 5,message:"Username must be at least 5 characters"}
                })}/>
                <span>{formState.errors?.username?.message}</span>
                <br />

                <label>Password:</label>
                <input type="password"{...register("password",{
                    required:{value:true,message:"Password is required"},
                })}/>
                <span>{formState.errors?.password?.message}</span>
                <br />
                <button>Login</button>
            </form>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    );
}

export default Login;
