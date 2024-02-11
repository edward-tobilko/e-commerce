import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { useStateContext } from "../contexts/ContextProvider";

// data
const themeColors = [
  {
    name: "blue",
    color: "blue",
  },
  {
    name: "green",
    color: "green",
  },
  {
    name: "purple",
    color: "#7352FF",
  },
  {
    name: "pink",
    color: "#FF5C8E",
  },
  {
    name: "black",
    color: "black",
  },
  {
    name: "red",
    color: "red",
  },
];

const SettingComponent = () => {
  const { currentColor, setMode, setColor, currentMode, setOpenSettings } =
    useStateContext();

  return (
    <div className="setting__background">
      <div className="setting">
        <div className="setting-header">
          <p className="setting-title">Setting</p>
          <button
            className="setting-btn"
            type="button"
            onClick={() => setOpenSettings(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="setting__content">
          <p className="setting-title content__title">Theme Options</p>
          <div className="setting__content-menu">
            <div className="setting__content-list">
              <input
                type="radio"
                name="theme"
                value="Light"
                className="setting__content-input"
                id="light"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <label htmlFor="light" className="setting__content-label">
                Light
              </label>
            </div>
            <div className="setting__content-list">
              <input
                type="radio"
                name="theme"
                value="Dark"
                className="setting__content-input"
                id="dark"
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <label htmlFor="dark" className="setting__content-label">
                Dark
              </label>
            </div>
          </div>
        </div>
        <div className="setting__footer">
          <p className="setting-title content__title">Theme Colors</p>
          <div className="setting__footer-colors">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="BottomCenter"
              >
                <div key={item.name} className="setting__footer-item">
                  <button
                    type="button"
                    className="setting__footer-btn"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {
                      setColor(item.color); // получаем нашь цвет
                    }}
                  >
                    <BsCheck
                      style={{ color: "white" }}
                      className={`${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
        <div className="setting__other">
          <h1 className="setting__other-title">The other settings...</h1>
        </div>
      </div>
    </div>
  );
};

export default SettingComponent;
