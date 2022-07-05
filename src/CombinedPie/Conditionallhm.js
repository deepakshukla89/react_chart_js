import React from 'react'
import Piechart from "../Piechart";

export default function Conditionallhm(props) {

        const PerfType = props.PerfTypeConditionLMH;
        if (PerfType==='lowPerf') {
            return   <Piechart txtColr={'lowTxtPerf'} chartType={'type3LowPerf'} TypeNameTop={props.PerfTypes} eventName={props.eventNames}/>;
        } else if(PerfType==='mediumPef'){
            return  <Piechart txtColr={'mediumxtPerf'} chartType={'type3MediumPerf'} TypeNameTop={props.PerfTypes} eventName={props.eventNames}/>;
        }
        else {
            return <Piechart txtColr={'highTxtPerf'} chartType={'type3HighPerf'} TypeNameTop={props.PerfTypes} eventName={props.eventNames}/>;
        }
    }

