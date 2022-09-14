import ApexCharts from 'react-apexcharts'
import { React, useState, useEffect } from 'react'

export default function Chart(){
    const [data,setData] = useState([])
    useEffect(()=>{
        let headers = {
            'method': 'GET',
            'accept': 'application/json',
            'key': document.cookie,
            'redirect': 'follow',
            'origin': 'same-origin'
        }
        fetch('http://localhost:8080',{heades:headers})
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err.message))
    },[])

    //test-----------
    console.log(data)
    //test-----------

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
        data: []
    }]

    return(
        <ApexCharts
            options={options}
            series={series}
            type="bar"
            //width={640}
            height={480}
            className="bg-light p-3 mb-5"
            style={{borderRadius:'8px'}}
        />
    )
}

/*
{
            x: 'Trade',
            y: 6,
            goals: [{
                name: 'Expected',
                value: 9,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Porogramação',
            y: 4,
            goals: [{
                name: 'Expected',
                value: 7,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Hack',
            y: 4,            
            goals: [{
                name: 'Expected',
                value: 7,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Idioma',
            y: 6,            
            goals: [{
                name: 'Expected',
                value: 8,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Análise metaforando',
            y: 0,            
            goals: [{
                name: 'Expected',
                value: 3,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        }
*/