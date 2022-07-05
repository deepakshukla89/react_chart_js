import React from 'react'
// import Piechart from "../Piechart";
import ChartComponent from "../ChartComponent";

export default function Pietwo() {
  return (
   <>

    <div>
      <div className="lineTwo displayFlex">
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
           barChart={'bar-chart2'}
         />
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
           barChart={'bar-chart3'}
         />
      </div>
    
    </div>

    </>

  )
}
