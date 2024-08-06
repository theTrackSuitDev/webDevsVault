import { ToastContainer, Slide } from "react-toastify";
import styles from "./Notification.module.css"

export default function Notification() {
    return (
        <ToastContainer
            className={styles.notification}
            position="top-right"
            autoClose={4000}
            limit={3}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
            progressStyle={{background: "#1AB188"}}
        />
    );
}