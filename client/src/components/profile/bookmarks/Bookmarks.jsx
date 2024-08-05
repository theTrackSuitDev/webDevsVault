import CatalogEntry from "../../catalog-entry/CatalogEntry";
import Pagination from "../../pagination/Pagination";
import styles from "../Profile.module.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function Bookmarks({
    bookmarks
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageEndIndex = currentPage * ITEMS_PER_PAGE;
    const totalPages = Math.ceil(bookmarks.length / ITEMS_PER_PAGE);

    console.log(bookmarks);
    
    return (
        <div className={styles.fav}>
        <h2>Bookmarks</h2>
        {bookmarks.length > 0 &&
        <>
        <div className={styles["table-wrapper"]}>
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
                    {bookmarks.slice(pageStartIndex, pageEndIndex).map((item) => (
                        <CatalogEntry 
                            key={item._id}
                            item={item}
                        />
                    ))}
                </tbody>
            </table>
        </div>

        <Pagination 
            count={totalPages} 
            page={currentPage}
            setCurrentPage={setCurrentPage}
        />
        </>
        }
        {bookmarks.length === 0 && <p>No bookmarks yet</p>}
    </div>
    );
}