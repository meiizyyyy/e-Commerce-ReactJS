import React, { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { StoreContext } from "@contexts/Store.context";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Checkbox, Col, Divider, Form, Input, Row, Button, message, notification } from "antd";
import { getAccountInfoAPI, getCartAPI, loginAPI } from "@services/api.service.";
import FormItem from "antd/es/form/FormItem";
const Account = () => {
    const [hovered, setHovered] = useState(false);
    const [RegisterHovered, setRegisterHovered] = useState(false);
    const [form] = Form.useForm();
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const { setUserId, handleGetCartList } = useContext(StoreContext);
    const navigate = useNavigate();

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
            message.success("Logged In!");
            navigate("/");
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message),
            });
        }
        setIsLoginClicked(false);
    };

    return (
        <div className="mt-24 flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center gap-5 bg-[#fafafa] py-8 text-xl uppercase">
                <VscAccount />
                MY ACCOUNT
            </div>
            <div className="flex w-full flex-col items-start justify-center px-5 md:w-[640px] 2xl:max-w-[1250px]">
                <div className="mt-5 uppercase text-mine-shaft-900">Login</div>
                <hr className="h-2 bg-black" />

                <Form form={form} name="login" layout="vertical" onFinish={onFinish} className="w-full">
                    <Form.Item
                        // label="Email"
                        //css
                        label={
                            <label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px", color: "#555555", letterSpacing: "2px" }}>Username or email address </label>
                        }
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
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px", color: "#555555", letterSpacing: "2px" }}>Password</label>}
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
            </div>
        </div>
    );
};

export default Account;
