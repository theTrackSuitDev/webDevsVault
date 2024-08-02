import styles from "./AddResource.module.css";
import { Formik } from 'formik';
import { ResourceSchema } from "../../utils/validation";

export default function AddResource() {
    const initialFormValues = {
        title: "",
        tech: "",
        desc: "",
        url: "",
        imgUrl: "",
    }

    const formSubmitHandler = (values) => {
        console.log(values);
    }

    return (
        
        <div className={styles.add}>
            <h1>Add a resource</h1>
            {/* <!-- <h1>Edit</h1> --> */}
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
                            placeholder="Resource title" 
                        />
                        {props.errors.title && (<p className={styles.error}>{props.errors.title}</p>)}
    
                        <label htmlFor="tech">Technology</label>
                        <select 
                            className={styles["tech-select"]} 
                            name="tech" 
                            id="tech" 
                            value={props.values.tech}
                            onChange={props.handleChange} 
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
    
                        <label htmlFor="desc">Description</label>
                        <textarea 
                            type="text" 
                            name="desc" 
                            id="desc" 
                            value={props.values.desc}
                            onChange={props.handleChange} 
                            placeholder="Short description"
                        ></textarea>
    
                        <label htmlFor="url">Resource URL</label>
                        <input 
                            type="text" 
                            name="url" 
                            id="url" 
                            value={props.values.url}
                            onChange={props.handleChange} 
                            placeholder="Link to resource" 
                        />
    
                        <label htmlFor="imgUrl">Image URL</label>
                        <input 
                            type="text" 
                            name="imgUrl" 
                            id="imgUrl"
                            value={props.values.imgUrl}
                            onChange={props.handleChange}  
                            placeholder="Image URL" 
                        />
    
                        <input className={styles.button} type="submit" value="Add" />
                        {/* <!-- <input className={styles.button} type="submit" value="Edit"> --> */}
                    </form>
                    )               
                }

            </Formik>

        </div>
    );
}