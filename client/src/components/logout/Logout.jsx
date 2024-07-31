import { useContext, useEffect } from "react";
import { logout } from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { modifyAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function logoutHandler() {
            const response = await logout();
            return response;
        }

        try {
            const result = logoutHandler();
            modifyAuthState({});
            console.log("Logged out successfully");
            navigate("/");
        } catch (error) {
            modifyAuthState({});
            console.log(error);
            navigate("/");
        }

    }, []);

    return null;
}