import { useEffect, useState } from "react";
import CatalogEntry from "../catalog-entry/CatalogEntry";
import styles from "./Catalog.module.css";
import { getAll } from "../../services/resourceService";
import Loader from "../loader/Loader";


export default function Catalog() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                            {items.map((item) => (
                                <CatalogEntry 
                                key={item._id}
                                item={item}
                                />
                            ))}
                        </tbody>
                        </table>
                        </>
                        )
                    : <Loader></Loader>                      
                }

            </>
            )}

        </div>
    );
}
