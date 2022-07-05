import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react";


export const ChartComponent = (props) => {

    const chartRef = useRef(null)

    useEffect(() => {
        // const bar_ctx = document.getElementById(props.barChart).getContext('2d');
        const bar_ctx = chartRef.current.getContext('2d');
        const greenColour = bar_ctx.createLinearGradient(0, 0, 0, 600);
        greenColour.addColorStop(1, props.blueDark);
        greenColour.addColorStop(0, props.blueLight);

        const redColour = bar_ctx.createLinearGradient(0, 0, 0, 600);
        redColour.addColorStop(1, props.redDark);
        redColour.addColorStop(0, props.redLight);

        const orangeColour = bar_ctx.createLinearGradient(0, 0, 0, 600);
        orangeColour.addColorStop(1, props.greenDark);
        orangeColour.addColorStop(0, props.greenLight);

        const blueColour = bar_ctx.createLinearGradient(0, 0, 0, 600);
        blueColour.addColorStop(1, props.orangeDark);
        blueColour.addColorStop(0, props.orangeLight);

        const bar_chart = new Chart(bar_ctx, {
            type: 'bar',
            data: {
                labels: ["Nancy", "Rahul", "Yash", "Lilly"],
                datasets: [{
                    label: 'Speaking Time (in Min.)',
                    data: [5, 10, 5, 5],
                    backgroundColor: [
                        greenColour,
                        redColour,
                        orangeColour,
                        blueColour
                    ],

                    hoverBorderWidth: 2,
                    maxBarThickness: 30,
                }]
            },
            options: {
                plugins: {
                    legend: {
                      position: 'right',
                    },
                  },
                indexAxis: 'y',
                scales:{
                    xAxes: [{

                        gridLines: {
                           display: false,
                           color: '#fff'
                        },
                        ticks: {
                            display: false
                         }

                     }],
                     yAxes: [{
                        ticks: {
                           beginAtZero: true, 
                           display: false
                        },
                        gridLines: {
                           display: false
                        }
                     }]
                }
                
            }
        });
        return () => {

        }
    }, [])




    return (<>
        <div className="BarchartCss">
            <div > <canvas ref = {chartRef} id={props.barChart} ></canvas></div>

            <div style={{top:'0%'}} className="eventTypeHeading">
                <h2 className="eventHeading">{props.eventName}</h2>
            </div>
        </div>
    </>

    )

}

export default ChartComponent;