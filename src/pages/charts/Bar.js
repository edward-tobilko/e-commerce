import React from "react";
import OrdersHeader from "../../components/OrdersHeader";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  DataLabel,
  Category,
  ColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

// data
const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];
const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Gold",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Silver",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Bronze",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="apps__container">
      <OrdersHeader category="Area chart" title="Bar" />
      <div className="area">
        <ChartComponent
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          id="bar-chart"
          visible={true}
          tooltip={{ enable: true, shared: false }}
          height="600px"
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          style={{ borderRadius: "15px" }}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[Legend, DataLabel, Category, ColumnSeries, Tooltip]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
