import axios from "axios";

const baseUrl = "http://localhost:3000/api/themes";

export const getAll = async () => {
    const result = await axios.get(baseUrl);

    return result;
};

export const getOne = async (resourceId) => {
    const result = await axios.get(`${baseUrl}/${resourceId}`, );

    return result;
}


export const create = async (resourceData) => {
    const result = await axios.post(
        baseUrl, 
        resourceData, 
        { withCredentials: true });

    return result;
};

export const edit = async (resourceId, resourceData) => {
    const result = await axios.put(
        `${baseUrl}/${resourceId}`, 
        resourceData,
        { withCredentials: true }
    );

    return result;
};

export const addToFavorites = async (resourceId) => {
    const result = await axios.put(
        `${baseUrl}/fav/${resourceId}`, 
        { withCredentials: true }
    );

    return result;
};

export const removeFromFavorites = async (resourceId) => {
    const result = await axios.put(
        `${baseUrl}/unfav/${resourceId}`, 
        { withCredentials: true }
    );

    return result;
};

export const deleteResource = async (resourceId) => {
    const result = await axios.delete(
        `${baseUrl}/${resourceId}`, 
        { withCredentials: true }
    );

    return result;
};
