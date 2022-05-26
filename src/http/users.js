import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getAllUsers = async () => {
    return await axios.get(`${API_URL}/users?since=0&per_page=20`, {
        headers: {
            "accept": "application/vnd.github.v3+json",
        },
    });
}

const getNextPageUsers = async (url) => {
    return await axios.get(url, {
        headers: {
            "accept": "application/vnd.github.v3+json",
        },
    });
}

const searchUsers = async (keyword) => {
    return await axios.get(`${API_URL}/search/users?q=${keyword}&followers:>=1000&per_page=20`, {
        headers: {
            "accept": "application/vnd.github.v3+json",
        },
    });
}

export { getAllUsers, getNextPageUsers, searchUsers };
