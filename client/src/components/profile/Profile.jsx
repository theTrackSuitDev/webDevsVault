import CatalogEntry from "../catalog-entry/CatalogEntry";
import styles from "./Profile.module.css";


export default function Profile() {
    return (
        <div className={styles.profile}>
        <h4>Miro's profile</h4>
        <div className={styles.resources}>
            <div className={styles["my-res"]}>
                <h2>My resources</h2>
                <table className={styles.list}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Tech</th>
                            <th>Added on</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <CatalogEntry />
                    </tbody>

                </table>
            </div>

            <div className={styles.fav}>
                <h2>Favorites</h2>
                <table className={styles.list}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Tech</th>
                            <th>Added on</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <CatalogEntry />
                        <CatalogEntry />
                        <CatalogEntry />
                        <CatalogEntry />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}