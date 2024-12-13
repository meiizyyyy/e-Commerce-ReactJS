import React, { useContext, useState } from "react";
import { Checkbox, Col, Divider, Form, Input, Row, Button, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
// import Button from "@c/Button/Button";
import { SidebarContext } from "@contexts/Sidebar.context";
import { registerAPI } from "@services/api.service.";
import { AxiosError } from "axios";

const RegisterSidebar = () => {
    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const [hovered, setHovered] = useState(false);
    const [RegisterHovered, setRegisterHovered] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setIsRegisterClicked(true);
        // alert("Register!!!");
        const res = await registerAPI(values.username, values.password);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "User Register Successfully!",
            });
            setType("login");
        } else {
            const error = AxiosError;
            notification.error({
                message: "Register user",
                description: JSON.stringify(res.message),
            });
        }
        setIsRegisterClicked(false);
    };
    return (
        <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="mt-5 text-lg">REGISTER</div>
            <div className="w-11/12">
                <Form form={form} name="register" layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        // label="Email"
                        //css
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px" }}>Username or Email</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
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
                    <Form.Item
                        name="confirm"
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px" }}>Confirm Password</label>}
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your Password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("The new password that you entered do not match!"));
                                },
                            }),
                        ]}>
                        <Input.Password style={{ borderRadius: "1px" }} />
                    </Form.Item>
                    {/* <FormItem> */}
                    {/* <Button content={"Login"} onClick={() => form.submit()} /> */}
                    <FormItem>
                        <Button
                            style={{
                                marginTop: "5px",
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
                            loading={isRegisterClicked}
                            onClick={() => form.submit()}>
                            REGISTER
                        </Button>
                    </FormItem>

                    {/* <Button 
                        style={{width:"100%"}}
                            type="primary"
                            // loading={isLoginClicked}
                            onClick={() => form.submit()}>
                            Login
                        </Button> */}
                    {/* </FormItem> */}

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
                        isPrimary={false}
                        onClick={(e) => {
                            e.preventDefault();
                            setType("login");
                        }}>
                        SIGN IN
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterSidebar;
