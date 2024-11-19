import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getAccountInfoAPI } from "../services/api.service.";
import { message } from "antd";

export const StoreContext = createContext({
    id: "",
    username: "",
});

export const StoreWrapper = (props) => {
    const [isAppLoading, setIsAppLoading] = useState(true);

    const [userId, setUserId] = useState(Cookies.get("userId"));
    const [UserInfo, setUserInfo] = useState({
        id: "",
        username: "",
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (!userId) return;
            try {
                const res = await getAccountInfoAPI(userId);
                if (res.data) {
                    setUserInfo(res.data);
                    // console.log("Check data account", res.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInfo();
    }, [userId]);
    // console.log("Check userInfo", UserInfo);
    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("userId");
        setUserInfo({
            id: "",
            username: "",
        });
        if (!Cookies.get("token")) {
            message.success("Logged Out!");
        }
    };
    return <StoreContext.Provider value={{ UserInfo, setUserInfo, handleLogout, setUserId, isAppLoading, setIsAppLoading }}>{props.children}</StoreContext.Provider>;
};