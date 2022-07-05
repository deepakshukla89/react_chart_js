import React from 'react'
import ChartComponent from "../ChartComponent";
import Conditionallhm from "./Conditionallhm";

export default function Pietwo() {
  return (
   <>

    <div>
    <div className="lineThree displayFlex">

        <Conditionallhm PerfTypes={'Medium Engagement'} PerfTypeConditionLMH={'lowPerf'} eventNames={'Engagement Rate'}/>

        <ChartComponent
           blueDark={'#622BC2'}
           blueLight={'#8A67C9'}
           redDark={'#D7473F'}
           redLight={'#FF857E'}
           greenDark={'#24C24E'}
           greenLight={'#45DE6E'}
           orangeDark={'#FA650A'}
           orangeLight={'#FF9556'}
           eventName={'Speaker Name'}
           bar-chart={'bar-chart3'}
         />
        
        <Conditionallhm PerfTypes={'High Productivity'} PerfTypeConditionLMH={'higherf'} eventNames={'Productivity Rate'}/>

        </div>
    
    </div>

    </>

  )
}
