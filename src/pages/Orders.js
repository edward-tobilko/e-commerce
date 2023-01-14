import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import OrdersHeader from "../components/OrdersHeader";
import OrderComponent from "../components/OrderComponent";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import product6 from "../images/product6.jpg";
import product7 from "../images/product7.jpg";

import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";

import { Rate } from "antd";

// data
const ordersData = [
  {
    id: 1,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: product6,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 2,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product5,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3.5} allowHalf />,
  },
  {
    id: 3,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product7,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 4,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2} allowHalf />,
  },
  {
    id: 5,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: product1,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4.5} allowHalf />,
  },
  {
    id: 6,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product2,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 7,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product3,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={1.5} allowHalf />,
  },
  {
    id: 8,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4} allowHalf />,
  },
  {
    id: 9,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={1} allowHalf />,
  },
  {
    id: 10,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 11,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4.5} allowHalf />,
  },
  {
    id: 12,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 13,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3} allowHalf />,
  },
  {
    id: 14,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: product6,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3.5} allowHalf />,
  },
  {
    id: 15,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product5,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4.5} allowHalf />,
  },
  {
    id: 16,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product7,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4} allowHalf />,
  },
  {
    id: 17,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 18,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: product1,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 19,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product2,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4} allowHalf />,
  },
  {
    id: 20,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product3,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4} allowHalf />,
  },
  {
    id: 21,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3.5} allowHalf />,
  },
  {
    id: 22,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3} allowHalf />,
  },
  {
    id: 23,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={3} allowHalf />,
  },
  {
    id: 24,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 25,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 26,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={1.5} allowHalf />,
  },
  {
    id: 27,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: product6,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4} allowHalf />,
  },
  {
    id: 28,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product5,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={4.5} allowHalf />,
  },
  {
    id: 29,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product7,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 30,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={5} allowHalf />,
  },
  {
    id: 31,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: product1,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 32,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product2,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 33,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product3,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 34,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 35,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 36,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 37,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 38,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 39,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 40,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: product6,
    amount: 1,
  },
  {
    id: 41,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product5,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 42,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product7,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 43,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 44,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: product1,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 45,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: product2,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 46,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: product3,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 47,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: product4,
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 48,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 49,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
  {
    id: 50,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
    amount: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto molestias odio, soluta eveniet, expedita, illum corporis possimus quo unde similique provident ipsa totam consequatur? Quis fugiat tempora voluptatibus beatae.",
    rate: <Rate defaultValue={2.5} allowHalf />,
  },
];

const Orders = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  const totalNumbersInPage = 10;
  const pagesVisited = pageNumber * totalNumbersInPage;
  const pageCount = Math.ceil(ordersData.length / totalNumbersInPage);

  const displayProducts = ordersData.slice(
    pagesVisited,
    pagesVisited + totalNumbersInPage,
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="orders">
      <OrdersHeader title="Orders" />
      <button onClick={() => navigate(-1)} className="goBack__btn">
        <TiArrowBackOutline />
      </button>
      <div className="orders__container">
        <ReactPaginate
          nextLabel={<MdOutlineSkipNext />}
          previousLabel={<MdOutlineSkipPrevious />}
          pageCount={pageCount}
          onPageChange={changePage}
          activeClassName={"paginationActive"}
          containerClassName={"paginationBtns"}
        />
        {displayProducts.map((item) => {
          return <OrderComponent key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
