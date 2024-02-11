import "../components-style.scss";

import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";

const SparkLine = () => {
  return (
    <>
      <SparklineComponent
        style={{ margin: "30px 0px", cursor: "pointer" }}
        lineWidth={1}
        valueType="Numeric"
        width="250px"
        height="80px"
        id="sparkline"
        type="Line"
        dataSource={[
          { x: 1, xval: "2017", yval: 200 },
          { x: 2, xval: "2018", yval: 600 },
          { x: 3, xval: "2019", yval: 700 },
          { x: 4, xval: "2020", yval: 800 },
          { x: 5, xval: "2021", yval: 500 },
          { x: 6, xval: "2022", yval: 1000 },
        ]}
        xName="xval"
        yName="yval"
        useGroupingSeparator={true}
        tooltipSettings={{
          visible: true,
          format: "${xval} : ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </>
  );
};

export default SparkLine;
