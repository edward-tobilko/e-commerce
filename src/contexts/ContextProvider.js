import { createContext, useContext, useState } from "react";

export const StateContext = createContext(null);

const initialStateByHeaderNavigation = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
  answerMessage: false,
};

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialStateByHeaderNavigation);

  // Colors mode
  const [currentColor, setCurrentColor] = useState("#1E4DB7");

  // Dark mode
  const [currentMode, setCurrentMode] = useState("Light");

  // Setting state (open or close)
  const [openSettings, setOpenSettings] = useState(false);

  // Authentication state
  const [isAuth, setIsAuth] = useState(true);

  // Loader
  const [isLoading, setIsLoading] = useState(false);

  /* Functions */
  const handleClick = (clicked) => {
    setIsClicked({ ...initialStateByHeaderNavigation, [clicked]: true });
  };

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("mode", event.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const setAuth = (auth) => {
    setIsAuth(auth);
    localStorage.setItem("isAuth", auth);
  };

  return (
    <StateContext.Provider
      value={{
        isClicked,
        currentColor,
        currentMode,
        openSettings,
        isAuth,
        isLoading,
        setIsClicked,
        handleClick,
        setMode,
        setColor,
        setOpenSettings,
        setAuth,
        setIsLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
