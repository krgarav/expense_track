import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const chartItemsValuesData= props.chartItems.map((chartItem)=>{return chartItem.value})
    const totalMax= Math.max(...chartItemsValuesData)
    console.log(props.chartItems)
  return (
    <div className="chart">
      {props.chartItems.map((chartItem) => {
        return (
          <ChartBar
            key={chartItem.label}
            value={chartItem.value}
            maxValue={totalMax}
            label={chartItem.label}
          />
        );  
      })}
     
    </div>
  );
};

export default Chart;
