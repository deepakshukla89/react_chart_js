import React from 'react'
import Piechart from "../Piechart";
import ChartComponent from "../ChartComponent";

export default function Pieone() {
  return (
   <>

    <div>
      <div className="lineOne displayFlex">
       <Piechart txtColr={'meetinColour'} chartType={'type2'} TypeNameTop='72 Min. Meetings' eventName={"Meeting Duration"}/>
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
           bar-chart={'barChart'}
         />
        <Piechart txtColr={'questionColour'} chartType={'type1'} TypeNameTop='20 Start Questions' eventName={"Questions Found"}/>
     
      </div>
    
    </div>

    </>

  )
}
