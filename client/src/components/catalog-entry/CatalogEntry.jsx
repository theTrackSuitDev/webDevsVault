import docImage from "../../assets/images/document-901.png";
import styles from "../catalog/Catalog.module.css"
import { Link } from "react-router-dom";

export default function CatalogEntry() {
    return (
        <tr className="entry">
        <td className={styles.img}>
            <img src={docImage} alt="Entry" />
        </td>
        <td className="title">CSS Easy round corners</td>
        <td className="tech">HTML/CSS</td>
        <td className="added">12-06-2024</td>
        <td className="details">
            <div className={styles["details-button"]}>
                <Link to="/details/:resourceId">Details</Link>
            </div>
        </td>
    </tr>
    );
}