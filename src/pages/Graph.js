import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// import dates from '../Data/Dates.json'
// import scores from '../Data/Scores.json'
charts(FusionCharts);

const dates = require('../Data/Dates_textblob.json')
const scores = require('../Data/Scores_textblob.json')

const dates_ = require('../Data/Dates__textblob.json')
const scores_ = require('../Data/Scores__textblob.json')

const dataSource1 = {
    chart: {
      caption: "Overall polarity for all newspaper using TextBlob library function",
      subcaption: "(As per computation)",
      xAxisname: "Date",
      YAxisName: "Polarity",
      showvalues: "0",
      numvisibleplot: "50",
      plottooltext:
        "<b>$dataValue</b> polarity score on $label",
      theme: "fusion",
      scrollToEnd: "1"
    },
    categories: dates ,
    dataset: scores
  };

const dataSource2 = {
    chart: {
    caption: "Overall polarity for all newspaper using TextBlob library function( x by 1000)",
    subcaption: "(As per computation)",
    xAxisname: "Date",
    YAxisName: "Polarity",
    showvalues: "0",
    numvisibleplot: "50",
    plottooltext:
        "<b>$dataValue</b> polarity score on $label",
    theme: "candy",
    scrollToEnd: "1"
    },
    categories: dates_ ,
    dataset: scores_
}; 


const Graph = () =>{
    console.log(dates)
    return (
        <div><ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource1}
        />
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource2}
        />
        </div>
    );
}
export default Graph;
