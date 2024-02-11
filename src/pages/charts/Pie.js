import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import OrdersHeader from "../../components/OrdersHeader";
import { useStateContext } from "../../contexts/ContextProvider";

// data
const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="apps__container">
      <OrdersHeader category="Pie chart" title="Pie" />
      <AccumulationChartComponent
        id="pie-chart"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }} // for the right visible table;
        height="600px"
      >
        <Inject
          services={[
            AccumulationLegend, // for the right list;
            PieSeries, // for the right list;
            AccumulationDataLabel,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            radius="80%"
            innerRadius="20%"
            xName="x"
            yName="y"
            dataSource={pieChartData}
            dataLabelTemplate={{
              visible: "true",
              position: "Insite",
              font: {
                color: "#fff",
                fontWeight: "600",
              },
            }}
            name="Sale" // the name on the toolkit;
            startAngle={0} // the start position doughnut;
            // endAngle={180} // half doughnut;
            endAngle={360} // full doughnut;
            explode={true}
            explodeIndex={2}
            explodeOffset="10%" // slide;
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
