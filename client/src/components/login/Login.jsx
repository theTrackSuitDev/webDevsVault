import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className={styles.login}>
                <h1>Login</h1>

                <form action="#">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" />

                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" />
        
                    <input className={styles.button} type="submit" value="Login" />
                </form>

                <p>No account? <Link to="/register">Register here!</Link></p>
        
            </div>
    );
}