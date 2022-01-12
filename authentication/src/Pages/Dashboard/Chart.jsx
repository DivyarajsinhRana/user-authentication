import { Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'
import './chart.css'

const Linechart = () => {
    const data = {
        labels:['jan','feb','mar','apr','may'],
        datasets:[{
            label:'sales for 2021 (M)',
            data:[3,2,1,1,5],
        }],
    }
    return(
        <div className="chart">
            <Line data={data}/>
        </div> 
    )
    
}

export default Linechart
