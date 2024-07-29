import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
    return (
        <div className={styles.register}>
                <h1>Register</h1>

                <form action="#">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />

                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter an username" />
                   
                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Set a password" />

                    <label for="rePass">Repeat password</label>
                    <input type="password" name="rePass" id="rePass" placeholder="Repeat password" />
        
                    <input className={styles.button} type="submit" value="Create a profile" />
                </form>

                <p>Already registered? <Link to="/login">Log in here!</Link></p>
        
            </div>
    );
}