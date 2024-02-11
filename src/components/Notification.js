import { RiErrorWarningLine } from "react-icons/ri";

import { useStateContext } from "../contexts/ContextProvider";

import Fade from "react-reveal/Fade";

const Notification = () => {
  const { setIsClicked } = useStateContext();

  return (
    <div className="notification__background">
      <Fade right delay={300}>
        <div className="notification">
          <div className="notification-message">
            <RiErrorWarningLine />
            <span>This is a new notification for you!</span>
          </div>
          <div className="notification-actions">
            <button
              className="notification-actions__close"
              onClick={() => setIsClicked(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Notification;
