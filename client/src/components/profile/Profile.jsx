import MyResources from "./my-resources/MyResources";
import styles from "./Profile.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getProfile } from "../../services/userService";
import Bookmarks from "./bookmarks/Bookmarks";
import { toast } from "react-toastify";


export default function Profile() {
    const { userId, username } = useContext(AuthContext);
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        (async () => {
            if (userId) {
                try {
                    const result = await getProfile();
                    const profile = result.data;
                    setProfileInfo(profile);                                    
                } catch (error) {
                    toast("An error occurred while loading profile data.");
                    console.log(error);
                    navigate("/");
                }  
            }
        })()
    }, [userId]);

    const myResources = profileInfo.themes?.slice().reverse();
    const bookmarks = profileInfo.subs?.slice().reverse();

    return (
        <div className={styles.profile}>
        <h4>{`${username}'s profile`}</h4>
        <div className={styles.resources}>
            {myResources && <MyResources myResources = {myResources}/>}
            {bookmarks && <Bookmarks bookmarks = {bookmarks}/>}
        </div>
    </div>
    );
}