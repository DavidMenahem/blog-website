import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notificationService from "../../../Services/NotificationService";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit, formState} = useForm<UserModel>();

    const navigate = useNavigate();

    async function send(user: UserModel){
        try{
            await authService.register(user);
            notificationService.success("Welcome!");
            navigate("/home");
        }catch(err: any){
            notificationService.error(err);
        }

    }
    return (
        <div className="Register Box">
			<form onSubmit={handleSubmit(send)}>
                <h3>Register</h3>
                <br />
                <label>שם:</label>
                <input type= "text"{...register("firstName",{
                    required: {value: true,message: "שם הוא שדה חובה"},
                    minLength:{value: 3,message:"השם צריך להיות לפחות 3 תווים"}
                })} />
                <span>{formState.errors?.firstName?.message}</span>
                <br />

                <label>שם משפחה:</label>
                <input type="text"{...register("lastName",{
                    required:{value:true,message:"שם משפחה הוא שדה חובה"},
                    minLength:{value: 3,message:"השם משפחה צריך להיות לפחות 3 תווים"}
                })}/>
                <span>{formState.errors?.lastName?.message}</span>
                <br />

                <label>שם משתמש:</label>
                <input type="text"{...register("username",{
                    required:{value:true,message:"שם משתמש הוא שדה חובה"},
                    minLength:{value: 5,message:"השם משתמש צריך להיות לפחות 5 תווים"}
                })}/>
                <span>{formState.errors?.username?.message}</span>
                <br />

                <label>סיסמא:</label>
                <input type="password"{...register("password",{
                    required:{value:true,message:"הסיסמא הוא שדה חובה"},
                    minLength:{value: 6,message:"הסיסמא חייבת להיות לפחות 6 תויים"}
                })}/>
                <span>{formState.errors?.password?.message}</span>
                <br />


                <label>אימייל:</label>
                <input type="email"{...register("email",{
                    required:{value:true,message:"האימייל הוא שדה חובה"},
                    
                })}/>
                <span>{formState.errors?.email?.message}</span>
                <br />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
