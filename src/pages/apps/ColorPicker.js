import React from "react";
import OrdersHeader from "../../components/OrdersHeader";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

// custom color picker component
const CustomColorPicker = ({ id, mode }) => {
  const changeColor = (event) => {
    document.getElementById("preview").style.backgroundColor =
      event.currentValue.hex;
  };
  return (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher="true"
      inline
      showButtons="false"
      change={changeColor}
    />
  );
};

const ColorPicker = () => {
  return (
    <div className="apps__container">
      <OrdersHeader category="Color-Picker app" title="Color-Picker" />
      <div className="colorPicker">
        <div id="preview" />
        <div>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Picker
          </p>
          <CustomColorPicker id="picker" mode="Picker" />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
