import styles from "./AddResource.module.css";
import { Formik } from 'formik';
import { ResourceSchema } from "../../utils/validation";
import { create } from "../../services/resourceService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddResource() {
    const navigate = useNavigate();

    const initialFormValues = {
        title: "",
        technology: "",
        description: "",
        resourceUrl: "",
        imageUrl: "",
    }

    const formSubmitHandler = async (values) => {
        try {
            const response = await create(values);
            navigate(`/details/${response.data}`)
        } catch (error) {           
            console.log(error);
            if (error.response?.data?.err?.code === 11000) {
                toast("A resource with the same title already exists!");
            } else {
                toast("An error occurred while adding the resource.");
            }
        }

    }

    return (
        
        <div className={styles.add}>
            <h1>Add a resource</h1>
            <Formik
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
    
                        <input className={styles.button} type="submit" value="Add" />
                    </form>
                    )               
                }

            </Formik>

        </div>
    );
}