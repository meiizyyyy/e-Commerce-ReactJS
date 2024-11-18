import axios from "./axios.customize";

const fetchAllProductAPI = () => {
    const URL_BACKEND = `/api/v1/product`;
    return axios.get(URL_BACKEND);
};

const loginAPI = (username, password) => {
    const URL_BACKEND = `/api/v1/login`;
    const data = {
        username: username,
        password: password,
        delay: 3000,
    };
    return axios.post(URL_BACKEND, data);
};

const registerAPI = (username, password) => {
    const URL_BACKEND = `/api/v1/register`;
    const data = {
        username: username,
        password: password,
        delay: 3000,
    };
    return axios.post(URL_BACKEND, data);
};

const getAccountInfoAPI = (userId) => {
    const URL_BACKEND = `/api/v1/user/info/${userId}`;
    return axios.get(URL_BACKEND);
};
export { fetchAllProductAPI, loginAPI, registerAPI, getAccountInfoAPI };
