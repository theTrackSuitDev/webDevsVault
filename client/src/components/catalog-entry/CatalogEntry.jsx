import docImage from "../../assets/images/document-901.png";
import styles from "../catalog/Catalog.module.css"
import { Link } from "react-router-dom";
import dateFormatter from "../../utils/dataFormatter";

export default function CatalogEntry({
    item
}) {
    return (
        <tr className="entry">
        <td className={styles.img}>
            <img src={docImage} alt="Entry" />
        </td>
        <td className="title">{item.title}</td>
        <td className="tech">{item.technology}</td>
        <td className="added">{dateFormatter(item.created_at)}</td>
        <td className="details">
            <div className={styles["details-button"]}>
                <Link to={`/details/${item._id}`}>Details</Link>
            </div>
        </td>
    </tr>
    );
}