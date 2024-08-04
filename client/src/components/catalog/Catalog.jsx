import { useEffect, useState } from "react";
import CatalogEntry from "../catalog-entry/CatalogEntry";
import styles from "./Catalog.module.css";
import { getAll } from "../../services/resourceService";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";

const ITEMS_PER_PAGE = 10;

export default function Catalog() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageEndIndex = currentPage * ITEMS_PER_PAGE;
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll();
                const allItems = result.data;
                setItems(allItems);     
            } catch (error) {
                console.log("Error fetching items");
            }
            setIsLoading(false);
        })()
    }, []);

    return (
        <div className={styles.catalog}>
            {!isLoading && items.length === 0 && <h1>No resources yet</h1>}
            {items.length > 0 && (
            <>
                {!isLoading
                    ? (
                        <>
                        <h1>All Resources</h1>
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
                                    {items.slice(pageStartIndex, pageEndIndex).map((item) => (
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
                        )
                    : <Loader></Loader>                      
                }

            </>
            )}

        </div>
    );
}
