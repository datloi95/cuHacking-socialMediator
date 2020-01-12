import React, { Component } from 'react';
import {Doughnut, Line} from 'react-chartjs-2'; 

class DoughnutChart extends Component {
    constructor(state, props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Techniacal", "Non-Technical"],
                datasets: [
                    {
                        label:'Customer',
                        data: [100,150],
                        backgroundColor:['rgb(4, 109, 229)','rgb(252, 135, 2)'],
                        borderColor:'rgb(193, 217, 245)',   
                        borderWidth: 1.5,
                        // hoverBackgroundColor:['rgb(4, 109, 229)','rgb(252, 135, 2)']
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart" style={{ width: "50vw", padding: "3%" }}>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'Customer Complaints',
                            fontSize:25,
                            position:'bottom'
                        },
                        maintainAspectRatio: true,
                        legend:{
                            display:true,
                            position:"top"
                        }
                    }}
                />
            </div>
        );
    }
}


export default DoughnutChart;