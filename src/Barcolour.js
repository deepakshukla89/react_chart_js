import Chart from 'chart.js/auto';
import { useEffect } from "react";


export const Barcolour = (props) => {
    var bar_ctx = document.getElementById('bar-chart').getContext('2d');
  
      var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
      purple_orange_gradient.addColorStop(0, 'props.topColour');
      purple_orange_gradient.addColorStop(1, 'props.bottomColour');
     
  
    return (<>  {''}  </>)
  
  }
  
  export default Barcolour;