import CatalogEntry from "../../catalog-entry/CatalogEntry";
import Pagination from "../../pagination/Pagination";
import styles from "../Profile.module.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function MyResources({
    myResources,
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageEndIndex = currentPage * ITEMS_PER_PAGE;
    const totalPages = Math.ceil(myResources.length / ITEMS_PER_PAGE);

    return (
        <>
        <div className={styles["my-res"]}>
            <h2>My resources</h2>
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
                        {myResources.slice(pageStartIndex, pageEndIndex).map((item) => (
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
        </div>
        </>
    );
}