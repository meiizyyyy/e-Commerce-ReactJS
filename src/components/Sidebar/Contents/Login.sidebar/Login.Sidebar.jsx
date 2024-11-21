import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Checkbox, Col, Divider, Form, Input, Row, Button, message, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import Button from "@c/Button/Button";
import { SidebarContext } from "../../../../contexts/Sidebar.context";
import { getAccountInfoAPI, getCartAPI, loginAPI } from "../../../../services/api.service.";
import { StoreContext } from "../../../../contexts/Store.context";
const LoginSidebar = () => {
    const { sidebar__login, login__content, login__header, login__fpw, button__register, buttonSignIn } = styles;

    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const { handleGetCartList, setUserId, setCartList } = useContext(StoreContext);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [form] = Form.useForm();

    // useEffect(() => {
    //     getAccountInfoAPI();
    // }, []);

    const onFinish = async (values) => {
        // console.log("Check values antd", values);
        setIsLoginClicked(true);
        const res = await loginAPI(values.username, values.password);
        if (res.data) {
            console.log("check ", res.data);
            console.log("check user ", values);
            const { id, refreshToken, token } = res.data;
            //name, values
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            await handleGetCartList(id);
            setIsOpen(false);
            message.success("Logged In!");
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message),
            });
        }
        setIsLoginClicked(false);
    };
    return (
        <div className={sidebar__login}>
            <div className={login__header}>SIGN IN</div>
            <div className={login__content}>
                <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        // label="Email"
                        //css
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px" }}>Username or Email</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                            // {
                            //     type: "email",
                            //     message: "The input is not valid E-mail!",
                            // },
                        ]}>
                        <Input style={{ borderRadius: "1px" }} />
                    </Form.Item>

                    <Form.Item
                        // label="Password"
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px" }}>Password</label>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}>
                        <Input.Password
                            style={{ borderRadius: "1px" }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") form.submit();
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px", marginTop: "10px" }}>Remember me</Checkbox>
                    </Form.Item>
                    <FormItem>
                        <Button className={buttonSignIn} loading={isLoginClicked} onClick={() => form.submit()}>
                            SIGN IN
                        </Button>
                    </FormItem>
                    <Form.Item>
                        <div className={login__fpw}>
                            <Link to="/register">Lost your Password?</Link>
                        </div>
                    </Form.Item>
                </Form>

                <Button
                    className={button__register}
                    content={"Register"}
                    // isPrimary={false}
                    onClick={(e) => {
                        e.preventDefault();
                        setType("Register");
                    }}>
                    Register
                </Button>
            </div>
        </div>
    );
};

export default LoginSidebar;
