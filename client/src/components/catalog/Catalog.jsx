import { useEffect, useState } from "react";
import CatalogEntry from "../catalog-entry/CatalogEntry";
import styles from "./Catalog.module.css";
import { getAll } from "../../services/resourceService";
import Loader from "../loader/Loader";


export default function Catalog() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const result = await getAll();
            setIsLoading(false);
            const allItems = result.data;
            setItems(allItems);            
        })()
    }, []);

    return (
        <div className={styles.catalog}>
            {items.length === 0 && <h1>No resources yet</h1>}
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
