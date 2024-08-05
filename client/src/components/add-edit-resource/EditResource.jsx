import { edit, getOne } from "../../services/resourceService";
import styles from "./AddResource.module.css";
import { ResourceSchema } from "../../utils/validation";
import Loader from "../loader/Loader";

import { Formik } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function EditResource() {
    const navigate = useNavigate();
    const [resource, setResource] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { userId, isLogged } = useContext(AuthContext);
    const { resourceId } = useParams();

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

    useEffect(() => {
        if (resource.userId && userId && !isAuthor) {
            navigate("/");
        }
    }, [resource, userId]);

    const formSubmitHandler = async (values) => {
        
        try {
            const response = await edit(resourceId, values);
            navigate(`/details/${response.data}`)
        } catch (error) {           
            console.log(error);
        }

    }

    const initialFormValues = {
        title: resource.title || "",
        technology: resource.technology || "",
        description: resource.description || "",
        resourceUrl: resource.resourceUrl || "",
        imageUrl: resource.imageUrl || "",
    }

    return (
        
        <div className={styles.add}>
            {isLoading && <Loader />}
            {(!isLoading && isAuthor) && 
            <>
                <h1>Edit resource</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues={initialFormValues}
                    validationSchema={ResourceSchema}
                    onSubmit={formSubmitHandler}
                >
                    {(props) => 
                        (
                        <form onSubmit={props.handleSubmit}>
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title"
                                value={props.values.title}
                                onChange={props.handleChange}
                                onFocus={() => {
                                    props.setFieldTouched("title");
                                }}
                                onBlur={(event) => {
                                    props.setFieldValue(event.target.name, event.target.value.trim());
                                }}  
                                placeholder="Resource title" 
                            />
                            {props.errors.title && 
                            props.touched.title && 
                            (<p className={styles.error}>{props.errors.title}</p>)}
        
                            <label htmlFor="technology">Technology</label>
                            <select 
                                className={styles["tech-select"]} 
                                name="technology" 
                                id="technology" 
                                value={props.values.technology}
                                onChange={props.handleChange}
                                onFocus={() => {
                                    props.setFieldTouched("technology");
                                }}
                            >
                                <option value="" disabled >Select Technology</option>
                                <option value="VanillaJS">Vanilla JS</option>
                                <option value="ReactJS">React</option>
                                <option value="AngularJS">Angular</option>
                                <option value="VueJS">Vue</option>
                                <option value="NodeJS">Node</option>
                                <option value="HTML/CSS">HTML/CSS</option>
                                <option value="Other">Other</option>
                            </select>
                            {props.errors.technology && 
                            props.touched.technology && 
                            (<p className={styles.error}>{props.errors.technology}</p>)}
        
                            <label htmlFor="description">Description</label>
                            <textarea 
                                type="text" 
                                name="description" 
                                id="description" 
                                value={props.values.description}
                                onChange={props.handleChange}
                                onBlur={(event) => {
                                    props.setFieldValue(event.target.name, event.target.value.trim());
                                }}
                                onFocus={() => {
                                    props.setFieldTouched("description");
                                }} 
                                placeholder="Short description"
                            ></textarea>
                            {props.errors.description && 
                            props.touched.description && 
                            (<p className={styles.error}>{props.errors.description}</p>)}
        
                            <label htmlFor="resourceUrl">Resource URL</label>
                            <input 
                                type="text" 
                                name="resourceUrl" 
                                id="resourceUrl" 
                                value={props.values.resourceUrl}
                                onChange={props.handleChange}
                                onFocus={() => {
                                    props.setFieldTouched("resourceUrl");
                                }} 
                                placeholder="Link to resource" 
                            />
                            {props.errors.resourceUrl && 
                            props.touched.resourceUrl && 
                            (<p className={styles.error}>{props.errors.resourceUrl}</p>)}
        
                            <label htmlFor="imageUrl">Image URL</label>
                            <input 
                                type="text" 
                                name="imageUrl" 
                                id="imageUrl"
                                value={props.values.imageUrl}
                                onChange={props.handleChange}
                                onFocus={() => {
                                    props.setFieldTouched("imageUrl");
                                }}  
                                placeholder="Image URL(optional)" 
                            />
                            {props.errors.imageUrl && 
                            props.touched.imageUrl && 
                            (<p className={styles.error}>{props.errors.imageUrl}</p>)}
        
                            <input 
                                className={`${styles.button} ${!props.dirty ? styles.disabled : ""}`} 
                                type="submit" 
                                value="Edit"
                                disabled = {!props.dirty}
                            />
                        </form>
                        )               
                    }
                </Formik>
            </>
            }

        </div>
    );
}