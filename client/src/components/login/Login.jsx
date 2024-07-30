import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/userService";
import { validateLogin } from "../../utils/validation";

export default function Login() {

    const loginCallback = async (formValues) => {
        
        try {
            const result = await login(formValues);
            console.log(result);
        } catch (error) {
            console.log(error.response.data);
        }
        
    }

    const { formValues, onChangeHandler, formSubmitHandler, validationErrors } = useForm({email: "", password: ""}, loginCallback, validateLogin);

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