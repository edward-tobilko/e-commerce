import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "./../../contexts/ContextProvider";
import OrdersHeader from "./../../components/OrdersHeader";

// data
const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 }, // the line in the table;
  title: "Months",
};

const ColorMappingPrimaryYAxis = {
  labelFormat: "{value}°C",
  title: "Temperature",
};

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="apps__container">
      <OrdersHeader
        category="Color-mapping chart"
        title="CLIMATE - WEATHER BY MONTH"
      />
      <ChartComponent
        id="charts"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"} // dark mode;
        legendSettings={{ mode: "Range", background: "white" }}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            xName="x"
            yName="y"
            name="Ukraine"
            type="Column"
            cornerRadius={{
              topLeft: 20,
              topRight: 20,
            }}
          />
        </SeriesCollectionDirective>

        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
