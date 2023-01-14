import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useStateContext } from "../contexts/ContextProvider";

import { TiArrowBackOutline } from "react-icons/ti";
import { Form, Input, Cascader, Select, Checkbox, Button } from "antd";

const Order = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  const { currentColor } = useStateContext();
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // For residence
  const residences = [
    {
      value: "Ukraine",
      label: "Ukraine",
      children: [
        {
          value: "Cherkasy",
          label: "Cherkasy",
          children: [
            {
              value: "street",
              label: "Shevchenko",
              children: [
                {
                  value: "house",
                  label: "142",
                },
              ],
            },
          ],
        },
        {
          value: "Lviv",
          label: "Lviv",
          children: [
            {
              value: "street",
              label: "Bandera",
              children: [
                {
                  value: "house",
                  label: "14322",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "USA",
      label: "USA",
      children: [
        {
          value: "Los Angeles",
          label: "Los Angeles",
          children: [
            {
              value: "street",
              label: "Avanyu",
              children: [
                {
                  value: "house",
                  label: "1621",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "England",
      label: "England",
      children: [
        {
          value: "London",
          label: "London",
          children: [
            {
              value: "street",
              label: "Fashion",
              children: [
                {
                  value: "house",
                  label: "46/11",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "France",
      label: "France",
      children: [
        {
          value: "Paris",
          label: "Paris",
          children: [
            {
              value: "street",
              label: "Modern",
              children: [
                {
                  value: "house",
                  label: "177",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "China",
      label: "China",
      children: [
        {
          value: "Shaanxi",
          label: "Shaanxi",
          children: [
            {
              value: "street",
              label: "Yongle",
              children: [
                {
                  value: "house",
                  label: "856",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "Japan",
      label: "Japan",
      children: [
        {
          value: "Hong Kong",
          label: "Hong Kong",
          children: [
            {
              value: "street",
              label: "Kawassaki",
              children: [
                {
                  value: "house",
                  label: "4326985/32",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

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
    console.log("Your order is: ", values);
  };

  // For the phone number
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

  return (
    <div className="order">
      <div className="apps__container">
        <h1 className="order-title">Place Order</h1>
        <button onClick={() => navigate(-1)} className="goBack__btn">
          <TiArrowBackOutline />
        </button>
        <div className="order-content">
          <Form
            {...formItemLayout}
            form={form}
            name="orders"
            onFinish={onFinish}
            initialValues={{
              residence: ["Coutry", "City", "Str.", "House", "Flat"],
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
                label="First Name"
                tooltip="Please, enter your First Name"
                rules={[
                  {
                    required: true,
                    message: "Please, enter your First Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="order__form-item"
                name="residence"
                label="Residence"
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "Please, enter your Residence!",
                  },
                ]}
              >
                <Cascader options={residences} />
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
                name="intro"
                label="Comments"
                rules={[
                  {
                    required: true,
                    message: "Please, enter your Comment!",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item
                className="order__form-item"
                name="gender"
                label="Sex"
                rules={[
                  {
                    required: true,
                    message: "Please, enter your Sex!",
                  },
                ]}
              >
                <Select placeholder="Введите свой пол">
                  <Option value="male">Man</Option>
                  <Option value="female">Woman</Option>
                  <Option value="other">The Other</Option>
                </Select>
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
                  I read of<NavLink to="#"> consent</NavLink>
                </Checkbox>
              </Form.Item>

              <div className="order__form-totalPrice">
                <span>Sum:</span>
                <span style={{ color: "red" }}> ${totalAmount} </span>
              </div>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: currentColor }}
                >
                  Buy
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Order;
