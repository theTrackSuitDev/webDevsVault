import {Pagination as PaginationMui} from '@mui/material';
import styles from "./Pagination.module.css"

export default function Pagination({
    count,
    page,
    setCurrentPage
}) {

    const pageChangeHandler = (event, selectedPage) => {
        setCurrentPage(selectedPage);
    }

    return (
        <PaginationMui 
            className={styles.pagination} 
            variant="outlined"
            shape="rounded"
            count={count} 
            page={page}
            onChange={pageChangeHandler}            
        />
    );
}