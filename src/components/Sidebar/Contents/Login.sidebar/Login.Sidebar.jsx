import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Checkbox, Col, Divider, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
import Button from "@c/Button/Button";
import { SidebarContext } from "../../../../contexts/Sidebar.context";
const LoginSidebar = () => {
    const { sidebar__login, login__content, login__header, login__fpw, button__register } = styles;

    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);

    const [form] = Form.useForm();

    const onFinish = () => {
        alert("Logged IN !!!");
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
                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox style={{ fontFamily: "Roboto Mono, monospace ", fontSize: "14px", marginTop: "10px" }}>Remember me</Checkbox>
                    </Form.Item>
                    {/* <FormItem> */}
                    <Button content={"Login"} onClick={() => form.submit()} />

                    <Form.Item>
                        <div className={login__fpw}>
                            <Link to="/register">Lost your Password?</Link>
                        </div>
                    </Form.Item>

                    {/* <Button 
                        style={{width:"100%"}}
                            type="primary"
                            // loading={isLoginClicked}
                            onClick={() => form.submit()}>
                            Login
                        </Button> */}
                    {/* </FormItem> */}
                </Form>

                <button
                    className={button__register}
                    content={"Register"}
                    isPrimary={false}
                    htmlType="button"
                    onClick={(e) => {
                        event.preventDefault();
                        setType("Register");
                    }}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default LoginSidebar;
