import axios from "./axios.customize";

const fetchAllProductAPI = () => {
    const URL_BACKEND = `/api/v1/product`;
    return axios.get(URL_BACKEND);
};

export { fetchAllProductAPI };
