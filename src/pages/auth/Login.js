import React from "react";
import { Form, Input, Button } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { currentColor, setAuth } = useStateContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (values) => {
    console.log("Your login is: ", values);
  };

  const handleLogin = () => {
    setAuth(true);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="order">
      <h1 className="order-title">Login</h1>
      <div className="order-content">
        <Form
          {...formItemLayout}
          form={form}
          name="orders"
          onFinish={onFinish}
          scrollToFirstError
        >
          <div className="order__form-list">
            <Form.Item
              className="order__form-item"
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Wrong e-mail!",
                },
                {
                  required: true,
                  message: "Please, enter your e-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="order__form-item"
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please, create password!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                type="password"
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: currentColor }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
