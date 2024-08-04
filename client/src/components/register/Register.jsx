import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { register } from "../../services/userService";
import { useForm } from "../../hooks/useForm";
import { validateRegister } from "../../utils/validation";


export default function Register() {
    const navigate = useNavigate();
    const { modifyAuthState } = useContext(AuthContext);


    const registerCallback = async (formValues) => {

        try {
            const result = await register(formValues);
            const newAuthState = {
                email: result.data.email,
                username: result.data.username,
                userId: result.data._id
            }

            modifyAuthState(newAuthState);
            navigate("/");
        } catch (error) {
            console.log(error.response.data);
        }

    }

    const initialFormValues = {
        email: "",
        username: "", 
        password: "",
        rePassword: ""
    }

    const { 
        formValues, 
        onChangeHandler, 
        formSubmitHandler, 
        validationErrors 
    } = useForm(initialFormValues, registerCallback, validateRegister)

    return (
        <div className={styles.register}>
                <h1>Register</h1>

                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={formValues.email}
                        onChange={onChangeHandler} 
                        placeholder="Enter your email" 
                    />
                    {validationErrors?.email && (<p className={styles.error}>{validationErrors.email}</p>)}
                    

                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={formValues.username}
                        onChange={onChangeHandler}  
                        placeholder="Enter an username" 
                    />
                    {validationErrors?.username && (<p className={styles.error}>{validationErrors.username}</p>)}

                   
                    <label htmlFor="pass">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={formValues.password}
                        onChange={onChangeHandler} 
                        placeholder="Set a password" 
                    />
                    {validationErrors?.password && (<p className={styles.error}>{validationErrors.password}</p>)}


                    <label htmlFor="rePassword">Repeat password</label>
                    <input 
                        type="password" 
                        name="rePassword" 
                        id="rePassword" 
                        value={formValues.rePassword}
                        onChange={onChangeHandler} 
                        placeholder="Repeat password" 
                    />
                    {validationErrors?.rePassword && (<p className={styles.error}>{validationErrors.rePassword}</p>)}
        
                    <input 
                        className={`${styles.button} ${Object.keys(validationErrors).length ? styles.disabled : ""}`}
                        type="submit" 
                        value="Create a profile" 
                        disabled = {Object.keys(validationErrors).length > 0}
                    />
                </form>

                <p>Already registered? <Link to="/login">Log in here!</Link></p>
        
            </div>
    );
}