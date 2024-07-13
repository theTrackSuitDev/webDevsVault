import bannerImage from "../../assets/images/management-or-business-collaboration-black-outline-18878.png";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.banner}>
            <h1 className={styles["main-title"]}>Welcome to the WebDevs Vault!</h1>
            <p className={styles["main-desc"]}>
                A treasury of useful resources for web developers
            </p>
            <section className={styles.description}>
                <div className={styles["main-image"]}>
                    <img
                        src={bannerImage}
                        alt="Banner"
                    />
                </div>
                <div className={styles.text}>
                    <p>
                        No need to spend hours looking for quality resources
                        anymore!
                    </p>
                    <p>
                        Access our collection of useful tips and tricks,
                        verified and recommended by fellow devs!
                    </p>
                    <p>Contribute by sharing valuable resources with others!</p>
                    <div className={`${styles.button} ${styles["join-button"]}`}>
                        <Link to="/register">Sign up!</Link>
                    </div>
                    {/* <div className={`${styles.button} ${styles["catalog-button"]}`}>
                      <Link to="/vault">Access the Vault!</Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
