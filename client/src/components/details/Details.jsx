import styles from "./Details.module.css";
import resourceImage from "../../assets/images/web-programming-12709.png"
import { Link } from "react-router-dom";

export default function Details() {
    return (
        <div className={styles.details}>
            <h1>CSS Easy round corners</h1>
            <p>Added on 22-06-2024 by Miro</p>
            <div className={styles["split-view"]}>
                <div className={styles.img}>
                    <img
                        src={resourceImage}
                        // Show resourceImage if the author didn't provide one.
                        alt="Resource"
                    />
                </div>
                <div className={styles.desc}>
                    <p>Tech: HTML/CSS</p>
                    <p>
                        Description: Simple trick to make beautiful round
                        corners with CSS only.
                    </p>
                    <div className={styles["res-button"]}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Resource Link
                        </a>
                    </div>
                    <div className={styles.interactions}>
                        {/* <!-- <div className={`${styles["res-button"]} ${styles["fav"]}`}>
                        Add to Favorites
                    </div>
                    <div className={`${styles["res-button"]} ${styles["fav"] ${styles["del"]}`}>
                        Remove from Favorites
                    </div> --> */}
                        <Link to="/edit/:resourceId">
                            <div className={`${styles["res-button"]} ${styles["edit"]}`}>Edit</div>
                        </Link>
                        <div className={`${styles["res-button"]} ${styles["del"]}`}>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
