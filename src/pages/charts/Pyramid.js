import {
  AccumulationChartComponent,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationDataLabel,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import OrdersHeader from "../../components/OrdersHeader";
import { useStateContext } from "../../contexts/ContextProvider";

// data
const pyramidData = [
  { x: "Sweet Treats", y: 120, text: "120 cal" },
  { x: "Milk, Youghnut, Cheese", y: 435, text: "435 cal" },
  { x: "Vegetables", y: 470, text: "470 cal" },
  { x: "Meat, Poultry, Fish", y: 475, text: "475 cal" },
  { x: "Fruits", y: 520, text: "520 cal" },
  { x: "Bread, Rice, Pasta", y: 930, text: "930 cal" },
];

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="apps__container">
      <OrdersHeader category="Pyramid chart" title="Pyramid" />
      <AccumulationChartComponent
        id="piramid-charts"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }} // for the right visible table;
        height="600px"
      >
        <Inject
          services={[
            AccumulationLegend, // for the right list;
            PyramidSeries, // for the right list;
            AccumulationDataLabel,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            type="Pyramid"
            xName="x"
            yName="y"
            dataSource={pyramidData}
            dataLabel={{
              visible: "true",
              position: "Inside",
              name: "text",
            }}
            explode={true} // slide piramid block
            width="75%"
            height="80%"
            gapRatio={0.05} // the gap of between pyramids block
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
