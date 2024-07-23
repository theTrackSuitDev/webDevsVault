import styles from "./AddResource.module.css";

export default function AddResource() {
    return (
        <div className={styles.add}>
            <h1>Add a resource</h1>
            {/* <!-- <h1>Edit</h1> --> */}
            <form action="#">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Resource title" />

                <label htmlFor="tech">Technology</label>
                <select className={styles["tech-select"]} id="tech" defaultValue={""}>
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
                <textarea type="text" id="desc" placeholder="Short description"></textarea>

                <label htmlFor="url">Resource URL</label>
                <input type="text" name="url" id="url" placeholder="Link to resource" />

                <label htmlFor="imgUrl">Image URL</label>
                <input type="text" name="imgUrl" id="imgUrl" placeholder="Image URL" />


                <input className={styles.button} type="submit" value="Add" />
                {/* <!-- <input className={styles.button} type="submit" value="Edit"> --> */}
            </form>
        </div>
    );
}