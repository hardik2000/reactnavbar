import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../plots/lm_vader_with_rolling.jpg'
import img2 from  '../plots/lm_vader_without_rolling.jpg';
import img3 from '../plots/lm_with_rolling.jpg';
import img4 from '../plots/lm_without_rolling.jpg';
import img5 from '../plots/vader_with_rolling.jpg';
import img6 from '../plots/vader_without_rolling.jpg';


charts(FusionCharts);

const dates = require('../Data/Dates_lm_vader.json')
const scores = require('../Data/Scores_lm_vader.json')

const dataSource1 = {
    chart: {
      caption: "Overall polarity for all newspaper using LM-Vader library function",
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

const Graph = () =>{
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} alt="LM Vader Analysis (14 days rolling)" />
                    <p className="legend">LM Vader Analysis (14 days rolling)</p>
                </div>
                <div>
                    <img src={img2} alt="LM Vader Analysis (no rolling)" />
                    <p className="legend">LM Vader Analysis (no rolling)</p>
                </div>
                <div>
                    <img src={img3} alt="LM  Analysis (14 days rolling)" />
                    <p className="legend">LM  Analysis (14 days rolling)</p>
                </div>
                <div>
                    <img src={img4} alt="LM Analysis (no rolling)" />
                    <p className="legend">LM Analysis (no rolling)</p>
                </div>
                <div>
                    <img src={img5} alt="Vader Analysis (14 days rolling)" />
                    <p className="legend">Vader Analysis (14 days rolling)</p>
                </div>
                <div>
                    <img src={img6} alt="Vader Analysis (no rolling)" />
                    <p className="legend">Vader Analysis (no rolling)</p>
                </div>
                
            </Carousel>
            <span>&nbsp;&nbsp;</span>
            <ReactFusioncharts
                type="scrollline2d"
                width="100%"
                height="500"
                dataFormat="JSON"
                dataSource={dataSource1}
            />
        </div>
    );
}
export default Graph;




