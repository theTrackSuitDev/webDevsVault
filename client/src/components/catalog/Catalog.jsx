import CatalogEntry from "../catalog-entry/CatalogEntry";
import styles from "./Catalog.module.css";

export default function Catalog() {
    return (
        <div className={styles.catalog}>
            <h1>All Resources</h1>
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
                </tbody>
            </table>
        </div>
    );
}
