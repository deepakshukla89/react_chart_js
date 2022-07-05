import React from 'react'
import './Piechart.css';

export default function Piechart(props) {
    const chartType = props.chartType ? props.chartType : '';
    const txtColr = props.txtColr ? props.txtColr : '';
    return (
        <>
            <div className="pieCard">
                <div className="outer_circle">
                    <p className={'circle_inside_txt ' + txtColr}>{props.TypeNameTop}</p>
                    <div class={'inner_circle ' + chartType}></div>
                </div>
                <div className="eventTypeHeading">
                    <h2 className="eventHeading">{props.eventName}</h2>
                </div>
            </div>




        </>
    )
}
