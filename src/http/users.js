import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const getAllUsers = async () => {
    return await axios.get(`${API_URL}/search/users?q=followers:>=1000&per_page=20`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "accept": "application/vnd.github.v3+json",
        },
    });
}

const getNextPageUsers = async (url) => {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "accept": "application/vnd.github.v3+json",
        },
    });
}

const searchUsers = async (keyword) => {
    return await axios.get(`${API_URL}/search/users?q=${keyword}&followers:>=1000&per_page=20`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "accept": "application/vnd.github.v3+json",
        },
    });
}

const getSingleUser = async (username) => {
    return await axios.get(`${API_URL}/users/${username}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "accept": "application/vnd.github.v3+json",
        },
    });
}

export { getAllUsers, getNextPageUsers, searchUsers, getSingleUser };
