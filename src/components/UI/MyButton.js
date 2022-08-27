import React from "react";
import Button from "@mui/material/Button";
import { useStateContext } from "../../contexts/ContextProvider";
import { MdOutlineQuestionAnswer } from "react-icons/md";

const MyButton = ({ text }) => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <Button
      className="ecommerce-btn"
      type="button"
      style={{ backgroundColor: currentColor }}
      variant="contained"
      onClick={() => handleClick("answerMessage")}
    >
      <MdOutlineQuestionAnswer style={{ marginRight: 10 }} />
      {text}
    </Button>
  );
};

export default MyButton;
