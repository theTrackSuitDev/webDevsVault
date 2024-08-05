import bannerImage from "../../assets/images/management-or-business-collaboration-black-outline-18878.png";
import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <h1>About the app</h1>
            <p>
                The WebDevs Vault is a SPA built as a course project during the
                ReactJS course @SoftUni in June/July 2024.
            </p>
            <p>
                The app has educational and demo purposes only. It solely aims
                to showcase the learnt techniques in using the React library to
                build interactive web applications.
            </p>
            <p>
                Back-end technologies are outside of the course scope. The app
                is intended to use a slightly modified RESTful API provided and
                built by the SoftUni academy for some workshop exercises.
            </p>
            <p>
                HTML/CSS are outside of the course scope. The App is not
                intended, nor required to be responsive or support mobile
                devices. The simplistic and basic look of the app was intended
                and desired.
            </p>
            <p>Enjoy using the app!</p>
            <div className={styles.img}>
                <img
                    src={bannerImage}
                    alt="Logo"
                />
            </div>
            <p className={styles.mention}>
                Credit to <a href="https://www.iconpacks.net" target="_blank">Iconpacks</a> for
                providing the free images used in the app!
            </p>
        </div>
    );
}
