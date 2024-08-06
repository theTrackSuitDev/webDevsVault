import axios from "axios";
import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export function interceptExpiredSession() {
    const navigate = useRef(useNavigate());
    const { modifyAuthState } = useContext(AuthContext);

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 403 &&
                error.response?.data?.message === "Invalid or expired session!") {
                    modifyAuthState({});
                    navigate.current("/login");
                    toast("Invalid or expired user session!");
                }

                if (error.response?.status === 401 &&
                    error.response?.data?.message === "Invalid or expired session!") {
                        modifyAuthState({});
                }

                if (error.response?.status === 400 &&
                    (error.response?.data?.err?.message === "invalid signature" || 
                    error.response?.data?.err?.message === "jwt malformed")
                    ) {
                        modifyAuthState({});
                        navigate.current("/");
                        toast("Invalid session credentials. Please log in again.");
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);
}

export default function InvalidSessionInterceptor() {
    interceptExpiredSession();
    return <></>;
}
