import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";

import { Form, Input, Select, Checkbox, Button } from "antd";

const Register = () => {
  const { currentColor, setAuth } = useStateContext();
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();

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
    console.log("Your register is: ", values);
  };

  // Phone number
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="38">+38</Option>
        <Option value="48">+48</Option>
        <Option value="44">+44</Option>
        <Option value="74">+74</Option>
      </Select>
    </Form.Item>
  );

  const handleLogin = () => {
    setAuth(true);
    navigate("/");
  };

  return (
    <div className="order">
      <h1 className="order-title">Registration</h1>
      <div className="order-content">
        <Form
          {...formItemLayout}
          form={form}
          name="orders"
          onFinish={onFinish}
          initialValues={{
            prefix: "38",
            suffix: "$",
          }}
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
                  message: "Wrong E-mail!",
                },
                {
                  required: true,
                  message: "Please, enter your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="order__form-item"
              name="name"
              label="Full Name"
              tooltip="Please, enter your Full Name"
              rules={[
                {
                  required: true,
                  message: "Please, enter your Full Name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="order__form-item"
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please, enter your Phone Number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
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

            <Form.Item
              className="order__form-item"
              name="confirmPassword"
              label="Confirm your password"
              rules={[
                {
                  required: true,
                  message: "Please, confirm your password!",
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

            <Form.Item
              className="order__form-item"
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("You should be accepted an agreement!"),
                        ),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I read of<NavLink to="/consent"> consent</NavLink>
              </Checkbox>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: currentColor }}
                onClick={handleLogin}
              >
                Register
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
