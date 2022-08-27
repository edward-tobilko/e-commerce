import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { RiFacebookCircleLine, RiLinkedinFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import photo from "./../images/avatar.jpg";

// data
const socials = [
  { id: 1, icon: <RiFacebookCircleLine />, backgroundColor: "blue" },
  { id: 2, icon: <RiLinkedinFill /> },
  { id: 3, icon: <BsInstagram />, backgroundColor: "#5a1111" },
  { id: 4, icon: <AiFillYoutube />, backgroundColor: "red" },
  { id: 5, icon: <SiGmail />, backgroundColor: "#5a1111" },
  { id: 6, icon: <BsTwitter /> },
];

const MyProfile = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="account__card">
          <div className="account__card-photoBackground">
            <img src={photo} alt="Photo" />
          </div>

          <div className="account__card-content">
            <div className="account__card-content__details">
              <h1 className="account__card-content__details-name">
                John Doe
                <br />
                <span className="account__card-content__details-job">
                  Web Developer
                </span>
              </h1>

              <ul className="account__card-content__details-social">
                {socials.map((item) => (
                  <li
                    className="account__card-content__details-social__item"
                    key={item.id}
                  >
                    <a
                      href="https://www.google.com"
                      target={"_blank"}
                      className="account__card-content__details-social__link"
                      style={{ color: item.backgroundColor }}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="account__card-content__details-description">
                In software engineering, the terms frontend and backend (or
                sometimes referred to as back end or back-end) refer to the
                separation of concerns between the presentation layer
                (frontend), and the data access layer (backend) of a piece of
                software, or the physical infrastructure or hardware. In the
                client–server model, the client is usually considered the
                frontend and the server is usually considered the backend, even
                when some presentation work is actually done on the server
                itself.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
