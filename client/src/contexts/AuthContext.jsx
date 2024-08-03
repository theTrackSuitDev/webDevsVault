import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/userService";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const modifyAuthState = (newState) => {
        setAuthState(newState);
    }

    const authData = {
        email: authState.email,
        username: authState.username,
        userId: authState.userId,
        isLogged: !!authState.userId,
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
            } catch (error) {
                modifyAuthState({});
                console.clear();
                console.log("User session successfully checked: Invalid or missing!");
            }
        }

        sessionCheck();

    }, []);
    
    return (
        <AuthContext.Provider value={authData}>
            {props.children}
        </AuthContext.Provider>
    )
}