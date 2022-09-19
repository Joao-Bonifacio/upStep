import ApexCharts from 'react-apexcharts'
import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Chart(){
    let template_bar = {x:'',y:5,goals: [{name: 'Expected', value:0, strokeHeight: 5, strokeColor: '#775DD0'}]}
    //let template_line = {x:'',y:5}
    const [data,setData] = useState({
        bar:[{x:0,y:0,goals:[]}],
        line:[{x:0,y:0}]
    })
    const addChart = ()=>{
        //e.preventDefault()
        let x = prompt('name: ')
        let y = Number(prompt('level: '))
        let expected = Number(prompt('expected: '))

        template_bar.x = x
        template_bar.y = y
        template_bar.goals[0].value = expected

        let config = {
            headers: {
              key: document.cookie,
            }
          }
        axios.post('http://localhost:8080/addcharts',{data:template_bar},config)
        window.location.reload()
    }

    useEffect(()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin',
            scope: 'chart'
        }
        fetch('http://localhost:8080',{ headers: headers })
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err.message))
    },[])

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
        data: data.bar[0]
    }]

    return(
        <div className="container bg-light p-3 mb-5" style={{borderRadius:'8px'}}>
            <div className='row text'>
                <div className='col-6'>sef improvment</div>
                <div className='col-6 text-right' style={{cursor:'pointer',right:0,textAlign:'right'}}>
                    <span className='p-3' onClick={addChart}><i class="fa-solid fa-plus"></i></span>
                    <span className='p-3'><i class="fa-solid fa-pen"></i></span>
                    <span className='p-3'><i class="fa-solid fa-trash"></i></span>
                </div>
            </div>
            <ApexCharts
                options={options}
                series={series}
                type="bar"
                //width={640}
                height={480}
            />
        </div>
    )
}