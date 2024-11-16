import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Checkbox, Col, Divider, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
import Button from "@c/Button/Button";
import { SidebarContext } from "../../../../contexts/Sidebar.context";
const RegisterSidebar = () => {
    const { sidebar__register, register__content, register__header, button__login } = styles;

    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);

    const [form] = Form.useForm();

    const onFinish = () => {
        alert("Register!!!");
    };
    return (
        <div className={sidebar__register}>
            <div className={register__header}>REGISTER</div>
            <div className={register__content}>
                <Form form={form} name="register" layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        // label="Email"
                        //css
                        label={<label style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px" }}>Username or Email</label>}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
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
                    <Button content={"Register"} onClick={() => form.submit()} />

                    {/* <Button 
                        style={{width:"100%"}}
                            type="primary"
                            // loading={isLoginClicked}
                            onClick={() => form.submit()}>
                            Login
                        </Button> */}
                    {/* </FormItem> */}

                    <button
                        className={button__login}
                        content={"Register"}
                        isPrimary={false}
                        htmlType="button"
                        onClick={(e) => {
                            event.preventDefault();
                            setType("login");
                        }}>
                        Log In
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterSidebar;
