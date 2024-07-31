import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const register = async (userData) => {
    const result = await axios.post(
        `${baseUrl}/register`, 
        userData,
        { withCredentials: true }
    );

    return result;
};

export const login = async (userData) => {
    const result = await axios.post(
        `${baseUrl}/login`, 
        userData,
        { withCredentials: true }
    );

    return result;
};

export const logout = async () => {
    const result = await axios.post(
        `${baseUrl}/logout`,
        null, 
        { withCredentials: true }
    );

    return result;
};

export const getProfile = async () => {
    const result = await axios.get(
        `${baseUrl}/users/profile`, 
        { withCredentials: true }
    );

    return result;
};