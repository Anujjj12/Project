import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import Router from "next/router";
import React from "react";

const LoginComponent = () => {
  const onFinish = (values) => {
    console.log(JSON.stringify(values));
    localStorage.setItem("Data", JSON.stringify(values));
    Router.push("./home");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-container">
      <Row
        align="middle"
        justify="space-around"
        className="full-height center width-100"
      >
        <Col span={24} xl={9}>
          <Card align="left">
            <div className="img-logo">
              <img src="images/logo1.jpeg" height="100px"></img>
            </div>
            <Form
              layout="horizontal"
              name="basic"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  size="large"
                  className="full-width"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<KeyOutlined />}
                  size="large"
                  className="full-width"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                  Forgot password ?
                </a>
              </Form.Item>
              <Form.Item>
                <div className="login-button">
                  <Button type="primary" block htmlType="submit">
                    Login
                  </Button>
                </div>
              </Form.Item>
              <Divider>Or </Divider>
              <div className="google-login">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
              <div></div>

              {/* <Divider>Or</Divider>  */}
              <div className="regi">
                Don't have an account? <a href=""> Register now!</a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginComponent;
