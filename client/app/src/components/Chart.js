import ApexCharts from 'react-apexcharts'
//import { React, useState } from 'react'

export default function Chart(props){
    //const [data,setData] = useState([])
    //setTimeout(() => {
        //setData(props.data[0])
        //console.log(props.data[0])
    //}, 1000)

    const options = {
        xaxis: {
            type: 'numeric'
        },
        yaxis:{
            tooltip: {
                enable: true
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
              fillColors: ['#00E396', '#775DD0']
            }
        }
    }
    const series = [{
        name: 'Actual',
        data: props.data[0]
    }]

    return(
        <ApexCharts
            options={options}
            series={series}
            type="bar"
            //width={640}
            height={480}
        />
    )
}