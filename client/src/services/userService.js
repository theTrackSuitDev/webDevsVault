import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const register = async (userData) => {
    const result = await axios.post(
        `${baseUrl}/register`, 
        userData
    );

    return result;
};

export const login = async (userData) => {
    const result = await axios.post(
        `${baseUrl}/login`, 
        userData
    );

    return result;
};

export const logout = async (userData) => {
    const result = await axios.post(
        `${baseUrl}/logout`, 
        { withCredentials: true }
    );

    return result;
};