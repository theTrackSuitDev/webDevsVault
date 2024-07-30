import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/userService";
import { validateLogin } from "../../utils/validation";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { modifyAuthState } = useContext(AuthContext)

    const loginCallback = async (formValues) => {
        
        try {
            const result = await login(formValues);
            const newAuthState = {
                email: result.data.email,
                username: result.data.username,
                userId: result.data._id
            }
            
            modifyAuthState(newAuthState);
            navigate("/");
            console.log(result.data);
        } catch (error) {
            console.log(error.response.data);
        }
        
    }

    const initialFormValues = {
        email: "", 
        password: ""
    }

    const { 
        formValues, 
        onChangeHandler, 
        formSubmitHandler, 
        validationErrors 
    } = useForm(initialFormValues, loginCallback, validateLogin);

    return (
        <div className={styles.login}>
                <h1>Login</h1>

                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={formValues.email}
                        onChange={onChangeHandler} 
                        placeholder="Enter your Email" 
                    />
                    {validationErrors?.email && (<p className={styles.error}>{validationErrors.email}</p>)}

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={formValues.password}
                        onChange={onChangeHandler} 
                        placeholder="Enter your password" 
                    />
                    {validationErrors?.password && (<p className={styles.error}>{validationErrors.password}</p>)}
                            
                    <input 
                        className={styles.button}
                        type="submit" 
                        value="Login"
                        />
                </form>

                <p>No account? <Link to="/register">Register here!</Link></p>
        
            </div>
    );
}