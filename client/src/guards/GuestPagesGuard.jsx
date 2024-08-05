import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/loader/Loader";

export default function GuestPagesGuard() {
    const { isLogged, isLoadingUserData } = useContext(AuthContext);

    if (isLoadingUserData) {
        return <Loader />
    }

    if (isLogged) {
        return <Navigate to="/"/>
    }

    return (
        <Outlet />
    );
}