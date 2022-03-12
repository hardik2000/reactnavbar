import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// import dates from '../Data/Dates.json'
// import scores from '../Data/Scores.json'
charts(FusionCharts);

const dates = require('../Data/Dates_textblob_vader.json')
const scores = require('../Data/Scores_textblob_vader.json')

const dates_textblob = require('../Data/Dates_textblob.json')
const scores_textblob = require('../Data/Scores_textblob.json')

const dates_vader = require('../Data/Dates_vader.json')
const scores_vader = require('../Data/Scores_vader.json')

const dates_lm = require('../Data/Dates_lm.json')
const scores_lm = require('../Data/Scores_lm.json')


const dates_lmnew = require('../Data/Dates_newlm.json')
const scores_lmnew = require('../Data/Scores_newlm.json')

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
      lineThickness : "2",
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
    categories: dates_textblob ,
    dataset: scores_textblob
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

const dataSource4 = {
    chart: {
    caption: "Overall polarity for all newspaper using LM library function",
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
    categories: dates_lm ,
    dataset: scores_lm
}; 

const dataSource5 = {
    chart: {
    caption: "Overall polarity for all newspaper using NEW LM library function",
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
    categories: dates_lmnew ,
    dataset: scores_lmnew
}; 

const Graph = () =>{
    console.log(dates)
    return (
        <div>
        <span>&nbsp;&nbsp;</span>
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            height="500"
            dataFormat="JSON"
            dataSource={dataSource1}
        />
        <span>&nbsp;&nbsp;</span>
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource2}
        />
        <span>&nbsp;&nbsp;</span>
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource3}
        />
        <span>&nbsp;&nbsp;</span>
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource4}
        />
        <span>&nbsp;&nbsp;</span>
        <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource5}
        />
        </div>
    );
}
export default Graph;
