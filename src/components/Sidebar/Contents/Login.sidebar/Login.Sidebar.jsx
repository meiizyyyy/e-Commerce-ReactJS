import React, { useContext, useEffect, useState } from "react";

import { Checkbox, Col, Divider, Form, Input, Row, Button, message, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { SidebarContext } from "@contexts/Sidebar.context";
import { getAccountInfoAPI, getCartAPI, loginAPI } from "@services/api.service.";
import { StoreContext } from "@contexts/Store.context";
const LoginSidebar = () => {
    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const { handleGetCartList, setUserId, setCartList } = useContext(StoreContext);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [form] = Form.useForm();
    const [hovered, setHovered] = useState(false);
    const [RegisterHovered, setRegisterHovered] = useState(false);
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
        <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="mt-5 text-lg">SIGN IN</div>
            <div className="w-11/12">
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
                        <Button
                            style={{
                                height: "42px",
                                width: "100%",
                                cursor: "pointer",
                                borderRadius: "2px",
                                border: "1px solid",
                                borderColor: hovered ? "#333333" : "transparent", // Màu viền khi hover
                                backgroundColor: hovered ? "transparent" : "#333333", // Màu nền khi hover
                                color: hovered ? "#333333" : "white", // Màu chữ khi hover
                                padding: "0.6875rem 0.75rem",
                                fontSize: "0.75rem",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            loading={isLoginClicked}
                            onClick={() => form.submit()}>
                            SIGN IN
                        </Button>
                    </FormItem>
                    <Form.Item>
                        <div className="text-center font-rtbmn">
                            <Link to="/register">Lost your Password?</Link>
                        </div>
                    </Form.Item>
                </Form>

                <Button
                    style={{
                        height: "42px",
                        width: "100%",
                        cursor: "pointer",
                        borderRadius: "2px",
                        border: "1px solid",
                        borderColor: RegisterHovered ? "transparent" : "#333333", // Màu viền khi hover
                        backgroundColor: RegisterHovered ? "#333333" : "transparent", // Màu nền khi hover
                        color: RegisterHovered ? "white" : "#333333", // Màu chữ khi hover
                        padding: "0.6875rem 0.75rem",
                        fontSize: "0.75rem",
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={() => setRegisterHovered(true)}
                    onMouseLeave={() => setRegisterHovered(false)}
                    content={"Register"}
                    // isPrimary={false}
                    onClick={(e) => {
                        e.preventDefault();
                        setType("Register");
                    }}>
                    REGISTER
                </Button>
            </div>
        </div>
    );
};

export default LoginSidebar;
