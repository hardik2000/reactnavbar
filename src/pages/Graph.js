import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// import dates from '../Data/Dates.json'
// import scores from '../Data/Scores.json'
charts(FusionCharts);

const dates = require('../Data/Dates_textblob_vader.json')
const scores = require('../Data/Scores_textblob_vader.json')

const dates_ = require('../Data/Dates__textblob.json')
const scores_ = require('../Data/Scores__textblob.json')

const dates_vader = require('../Data/Dates_vader.json')
const scores_vader = require('../Data/Scores_vader.json')

const dataSource1 = {
    chart: {
      caption: "Overall polarity for all newspaper using TextBlob-Vader library function",
      subcaption: "(As per computation)",
      xAxisname: "Date",
      YAxisName: "Polarity",
      showhovereffect: "1",
      showvalues: "0",
      numbersuffix: "%",
      drawcrossline: "1",
      plottooltext:
        "<b>$dataValue</b> polarity score on $label",
      theme: "fusion",
      numvisibleplot: "75",
      scrollToEnd: "1",
    },
    categories: dates ,
    dataset: scores
  };

const dataSource2 = {
    chart: {
    caption: "Overall polarity for all newspaper using TextBlob library function",
    subcaption: "(As per computation)",
    xAxisname: "Date",
    YAxisName: "Polarity",
    showvalues: "1",
    numvisibleplot: "75",
    plottooltext:
        "<b>$dataValue</b> polarity score on $label",
    theme: "candy",
    scrollToEnd: "1"
    },
    categories: dates_ ,
    dataset: scores_
}; 

const dataSource3 = {
    chart: {
    caption: "Overall polarity for all newspaper using Vader library function",
    subcaption: "(As per computation)",
    xAxisname: "Date",
    YAxisName: "Polarity",
    showvalues: "1",
    numvisibleplot: "75",
    plottooltext:
        "<b>$dataValue</b> polarity score on $label",
    theme: "candy",
    scrollToEnd: "1"
    },
    categories: dates_vader ,
    dataset: scores_vader
}; 

const Graph = () =>{
    console.log(dates)
    return (
        <div><ReactFusioncharts
            type="scrollline2d"
            width="100%"
            height="500"
            dataFormat="JSON"
            dataSource={dataSource1}
        />
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource2}
        />
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource3}
        />
        </div>
    );
}
export default Graph;
