import React, {Component} from "react";
import Highcharts from "highcharts";
import "./diagram.css";
import PropTypes from "prop-types";

export default class GenderDiagram extends Component{
    componentDidMount(){
        const {male,female} = this.props;
        const percents = this.countingPercent(male,female);
        this.renderDiagram(percents);
    }
    renderDiagram = (percents) =>{
        const male = percents[0];
        const female = percents[1];
        Highcharts.chart("container", {
            chart: {
                type: "pie"
            },
            title: {
                text: "Gender Information"
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                },
                point: {
                    valueSuffix: "%"
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}: {point.y:.1f}%"
                    }
                }
            },
            tooltip: {
                headerFormat: "<span style=\"font-size:11px\">{series.name}</span><br>",
                pointFormat: "<span style=\"color:{point.color}\">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>"
            },
            series: [
                {
                    name: "Genders",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Male",
                            y: male,
                        },
                        {
                            name: "Female",
                            y: female,
                        }
                    ],
                }
            ]
        });
    }
   
    countingPercent = (male,female) =>{
        const malePercent = male/(male+female)*100;
        const femalePercent = female/(male+female)*100;
        return [malePercent,femalePercent];
    }
    
    render(){
        return(
            <div>
                <figure className="highcharts-figure">
                    <div id="container"></div>
                    <p className="highcharts-description">
 
                    </p>
                </figure>
            </div>
        );
    }
}

GenderDiagram.propTypes = {
    male : PropTypes.any,
    female: PropTypes.any
};