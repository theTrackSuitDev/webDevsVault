import styles from "./Details.module.css";
import resourceImage from "../../assets/images/web-programming-12709.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { addToBookmarks, deleteResource, getOne, removeFromBookmarks } from "../../services/resourceService";
import dateFormatter from "../../utils/dataFormatter";
import Loader from "../loader/Loader";
import ConfirmDialog from "../confirm-dialog/ConfirmDialog";
import { toast } from "react-toastify";

export default function Details() {
    const [resource, setResource] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false);
    const { userId, isLogged } = useContext(AuthContext);
    const { resourceId } = useParams();
    const navigate = useNavigate();

    const imgRef = useRef();
    const onImgError = () => imgRef.current.src = resourceImage;

    const bookmarkHandler = async (resourceId) => {
        try {
            const updatedItem = await addToBookmarks(resourceId);
            setResource(updatedItem.data);
            toast("Added to bookmarks!");
        } catch (error) {
            console.log(error);
            toast("An error occurred while add bookmark.");
        }
    }

    const removeBookmarkHandler = async (resourceId) => {
        try {
            const updatedItem = await removeFromBookmarks(resourceId);
            setResource(updatedItem.data);
            toast("Removed form bookmarks!")
        } catch (error) {
            console.log(error);
            toast("An error occurred while removing bookmark.");
        }
    }

    const deleteHandler = async (resourceId) => {
        try {
            const deletedItem = await deleteResource(resourceId);
            toast("Resource deleted successfully.");
            navigate("/vault");
        } catch (error) {
            console.log(error);
            toast("An error occurred while deleting the resource.");
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const result = await getOne(resourceId);
                const item = result.data;
                if (item === null) {                      
                    navigate("/404");
                }
                setResource(item);
                setIsLoading(false);

            } catch (error) {
                if (error.response?.data?.err?.name === "CastError" &&
                    error.response?.data?.err?.path === "_id") {                      
                        navigate("/404");
                } else {
                    console.log(error);
                    toast("An error occurred while loading the resource data.");
                }
            }
            
        })()
    }, []);

    const isAuthor = resource.userId?._id === userId;
    const isBooked = !isAuthor && (resource.subscribers?.includes(userId));

    const deleteDialogTitle = `Delete "${resource.title}"`
    const deleteDialogMessage = "Are you sure you want to delete this resource?"
    
    return (
        <div className={styles.details}>
            {!isLoading ?
            <>
                <h1>{resource.title}</h1>
                <p>{`Added on ${dateFormatter(resource.created_at)} by ${resource.userId?.username}`}</p>
                <div className={styles["split-view"]}>
                    <div className={styles.img}>
                        <img
                            ref={imgRef}
                            src={
                                resource.imageUrl === ""
                                    ? resourceImage
                                    : resource.imageUrl
                            }
                            onError={onImgError}
                            alt="Resource"
                        />
                    </div>
                    <div className={styles.desc}>
                        <p>{`Tech: ${resource.technology}`}</p>
                        <p>
                            {`Description: ${resource.description}`}
                        </p>
                        <div className={styles["res-button"]}>
                            <a href={resource.resourceUrl} target="_blank" rel="noopener noreferrer">
                                Resource Link
                            </a>
                        </div>
                        <div className={styles.interactions}>
                            {isLogged && !isAuthor && 
                            <>
                                {!isBooked 
                                    ? <div className={`${styles["res-button"]} ${styles["fav"]} ${styles["del"]}`} onClick={() => bookmarkHandler(resourceId)}>
                                        Bookmark
                                    </div> 
                                    : <div className={`${styles["res-button"]} ${styles["fav"]} ${styles["del"]}`} onClick={() => removeBookmarkHandler(resourceId)}>
                                        Unbookmark
                                    </div>
                                }
                            </>
                            }

                            {isAuthor &&
                            <>
                                <Link to={`/edit/${resourceId}`}>
                                <div className={`${styles["res-button"]} ${styles["edit"]}`}>Edit</div>
                                </Link>
                                <div className={`${styles["res-button"]} ${styles["del"]}`} onClick={() => setShowConfirm(true)}>Delete</div>
                            </>
                            }
                            <p className={styles["sub-info"]}>{`Bookmarked by ${resource.subscribers?.length} users`}</p>
                        </div>
                    </div>
                </div>
            </>
            : <Loader />
            }
            <ConfirmDialog 
                open={showConfirm}
                onClose={() => setShowConfirm(false)}
                onProceed={() => deleteHandler(resourceId)} 
                title={deleteDialogTitle}
                message={deleteDialogMessage}
            />
        </div>
    );
}
