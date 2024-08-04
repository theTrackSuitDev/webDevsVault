import styles from "./Details.module.css";
import resourceImage from "../../assets/images/web-programming-12709.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { addToBookmarks, getOne, removeFromBookmarks } from "../../services/resourceService";
import dateFormatter from "../../utils/dataFormatter";
import Loader from "../loader/Loader";

export default function Details() {
    const [resource, setResource] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { userId, isLogged } = useContext(AuthContext);
    const { resourceId } = useParams();
    const navigate = useNavigate();

    const imgRef = useRef();
    const onImgError = () => imgRef.current.src = resourceImage;

    const bookmarkHandler = async (resourceId) => {
        try {
            const updatedItem = await addToBookmarks(resourceId);
           
            setResource(updatedItem.data);
        } catch (error) {
            console.log("Error updating item");
            console.log(error);
        }
    }

    const removeBookmarkHandler = async (resourceId) => {
        try {
            const updatedItem = await removeFromBookmarks(resourceId);
            console.log(updatedItem);

            setResource(updatedItem.data);
        } catch (error) {
            console.log("Error updating item");
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const result = await getOne(resourceId);
                const item = result.data;
                setResource(item);
                setIsLoading(false);

            } catch (error) {
                if (error.response?.data?.err?.name === "CastError" &&
                    error.response?.data?.err?.path === "_id") {
                        console.log("Resource not found!");                        
                        navigate("/404");
                } else {
                    console.log("Error fetching item");
                    console.log(error);
                }
            }

        })()
    }, []);

    const isAuthor = resource.userId?._id === userId;
    const isBooked = !isAuthor && (resource.subscribers?.includes(userId));
    
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
                                <div className={`${styles["res-button"]} ${styles["del"]}`}>Delete</div>
                            </>
                            }
                            <p className={styles["sub-info"]}>{`Bookmarked by ${resource.subscribers?.length} users`}</p>
                        </div>
                    </div>
                </div>
            </>
            : <Loader />
            }

        </div>
    );
}
