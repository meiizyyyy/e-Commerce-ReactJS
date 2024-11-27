import axios from "axios";
import Cookies from "js-cookie";
// import NProgress from "nprogress";

// NProgress.configure({
//     showSpinner: false,
//     trickleSpeed: 100,
// });

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // NProgress.start();
        // Do something before request is sent
        // if (typeof window !== "undefined" && window && window.localStorage && window.localStorage.getItem("access_token")) {
        //     config.headers.Authorization = "Bearer " + window.localStorage.getItem("access_token");
        // }
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // NProgress.done();
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // NProgress.done();
        if (response.data && response.data.data) return response.data;
        return response;
    },
    async function (error) {
        // NProgress.done();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.get("refreshToken");
            if (!refreshToken) {
                return Promise.reject(error);
            }
            try {
                const res = await instance.post("https://be-project-reactjs.vercel.app/api/v1/refresh-token", {
                    token: refreshToken,
                });

                const newAccessToken = res.data.accessToken;
                Cookies.set("token", newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return instance(originalRequest);
            } catch (error) {
                Cookies.remove("token");
                Cookies.remove("refreshToken");
                Cookies.remove("userId");

                return Promise.reject(error);
            }
        }

        if (error.response && error.response.data) return error.response.data;
        
        return Promise.reject(error);
    },
);

export default instance;
