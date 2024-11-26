import axios from "./axios.customize";

const fetchAllProductAPI = (sortType, page, limit) => {
    const URL_BACKEND = `/api/v1/product?sortType=${sortType}&page=${page}&limit=${limit}`;
    return axios.get(URL_BACKEND);
};

const getProductInfoAPI = (id) => {
    const URL_BACKEND = `/api/v1/product/${id}`;
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

const addToCartAPI = (userId, productId, quantity, size) => {
    const URL_BACKEND = `/api/v1/cart`;
    const data = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        size: size,
    };
    return axios.post(URL_BACKEND, data);
};

const changeQuantityAPI = (userId, productId, quantity, size, isMultiple) => {
    const URL_BACKEND = `/api/v1/cart`;
    const data = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        size: size,
        isMultiple: true,
    };
    return axios.post(URL_BACKEND, data);
};

const getCartAPI = (userId) => {
    const URL_BACKEND = `/api/v1/cart/${userId}`;
    return axios.get(URL_BACKEND);
};

const removeItemFromCart = (userId, productId) => {
    const URL_BACKEND = `/api/v1/cart/deleteItem`;
    const data = {
        userId: userId,
        productId: productId,
    };
    return axios.delete(URL_BACKEND, {
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    });
};

const removeCartAPI = (userId) => {
    const URL_BACKEND = `/api/v1/cart/delete`;
    const data = {
        userId: userId,
    };
    return axios.delete(URL_BACKEND, {
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    });
};
export { fetchAllProductAPI, loginAPI, registerAPI, getAccountInfoAPI, addToCartAPI, getCartAPI, removeItemFromCart, getProductInfoAPI, changeQuantityAPI, removeCartAPI };
