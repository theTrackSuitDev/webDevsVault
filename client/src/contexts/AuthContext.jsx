import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/userService";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);

    const modifyAuthState = (newState) => {
        setAuthState(newState);
    }

    const authData = {
        email: authState.email,
        username: authState.username,
        userId: authState.userId,
        isLogged: !!authState.userId,
        isLoadingUserData,
        modifyAuthState
    }

    useEffect(() => {
        async function sessionCheck() {
            try {
                const response = await getProfile();
                const newAuthState = {
                    email: response.data.email,
                    username: response.data.username,
                    userId: response.data._id
                }
    
                modifyAuthState(newAuthState);
                toast(`Welcome back, ${newAuthState.username}!`)
            } catch (error) {
                modifyAuthState({});
                console.log(error);
                console.log("User session successfully checked: Invalid or missing!");
                toast("Welcome, Guest!");
            }

            setIsLoadingUserData(false);
        }

        sessionCheck();

    }, []);
    
    return (
        <AuthContext.Provider value={authData}>
            {props.children}
        </AuthContext.Provider>
    )
}