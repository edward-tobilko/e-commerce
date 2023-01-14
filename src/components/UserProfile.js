import React from "react";
import { useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FiCreditCard } from "react-icons/fi";
import { MdForwardToInbox, MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../images/avatar3.png";

import Fade from "react-reveal/Fade";

const UserProfile = () => {
  const { currentColor, setIsClicked, setAuth } = useStateContext();
  const navigate = useNavigate();

  const goToTasks = () => {
    navigate("/tasks");
    setIsClicked(false);
  };

  const goToMessages = () => {
    navigate("/messages");
    setIsClicked(false);
  };

  const goToMyProfile = () => {
    navigate("/my-profile");
    setIsClicked(false);
  };

  const logout = () => {
    setAuth(false);
    navigate("/login");
    setIsClicked(false);
  };

  return (
    <div className="profile__background">
      <Fade top>
        <div className="profile">
          <div className="profile__container">
            <div className="profile__container-header">
              <p className="profile__container-title">User Profile</p>
              <button
                className="profile__container-btn"
                type="button"
                onClick={() => setIsClicked(false)}
              >
                <MdOutlineCancel />
              </button>
            </div>
            <div className="profile__container-aboutMe">
              <img src={avatar} className="profile__container-avatar" alt="" />
              <div className="profile__container-contacts">
                <h3 className="profile__container-name">John Doe</h3>
                <p className="profile__container-job">Administrator</p>
                <p className="profile__container-mail">johndoe@gmail.com</p>
              </div>
            </div>
            <div className="profile__container-content">
              <ul className="profile__container-menu">
                <li className="profile__container-list">
                  <div
                    className="profile__container-list__icon"
                    style={{
                      color: "#03C9D7",
                      backgroundColor: "#E5FAFB",
                    }}
                  >
                    <CgProfile />
                  </div>
                  <div className="profile__container-list__about">
                    <p
                      className="profile__container-list__title"
                      onClick={goToMyProfile}
                    >
                      My Profile
                    </p>
                    <p className="profile__container-list__description">
                      Account
                    </p>
                  </div>
                </li>
                <li className="profile__container-list">
                  <div
                    className="profile__container-list__icon"
                    style={{
                      color: "rgb(0, 194, 146)",
                      backgroundColor: "rgb(235, 250, 242)",
                    }}
                  >
                    <MdForwardToInbox />
                  </div>
                  <div className="profile__container-list__about">
                    <p
                      className="profile__container-list__title"
                      onClick={goToMessages}
                    >
                      My Inbox
                    </p>
                    <p className="profile__container-list__description">
                      Messages & Emails
                    </p>
                  </div>
                </li>
                <li className="profile__container-list">
                  <div
                    className="profile__container-list__icon"
                    style={{
                      color: "rgb(255, 244, 229)",
                      backgroundColor: "rgb(254, 201, 15)",
                    }}
                  >
                    <FiCreditCard />
                  </div>
                  <div className="profile__container-list__about">
                    <p
                      className="profile__container-list__title"
                      onClick={goToTasks}
                    >
                      My Tasks
                    </p>
                    <p className="profile__container-list__description">
                      To-do and Daily Tasks
                    </p>
                  </div>
                </li>
              </ul>
              <button
                className="profile__container-content__btn"
                style={{ backgroundColor: currentColor }}
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UserProfile;
