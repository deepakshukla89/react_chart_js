import React from 'react'
import ChartComponent from "./ChartComponent";

function Barcomponent(props) {
  
  return (
    <>
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
           bar-chart={'bar-charts2'}
      />
    </>
  )
}

export default Barcomponent;