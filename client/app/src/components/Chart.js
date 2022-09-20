import ApexCharts from 'react-apexcharts'
import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Chart(){
    let template_bar = {x:'',y:5,goals: [{name: 'Expected', value:0, strokeHeight: 5, strokeColor: '#775DD0'}]}

    const [data,setData] = useState({
        bar:[[{x:0,y:0,goals:[]}]],
        line:[{x:0,y:0}]
    })
    const addChart = ()=>{
        let x = prompt('name: ')
        let y = Number(prompt('level: '))
        let expected = Number(prompt('expected: '))

        template_bar.x = x
        template_bar.y = y
        template_bar.goals[0].value = expected

        let preval = data
        preval.bar[0].push(template_bar)
        setData(preval)

        let config = {
            headers: {
              key: document.cookie,
            }
          }
        axios.post('http://localhost:8080/addcharts',{data:data},config)
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

    console.log(data.bar[0])
    return(
        <div className="container bg-light p-3 mb-5" style={{borderRadius:'8px'}}>
            <div className='row text'>
                <div className='col-6'>sef improvment</div>
                <div className='col-6 text-right' style={{cursor:'pointer',right:0,textAlign:'right'}}>
                    <span className='p-3' onClick={addChart}><i className="fa-solid fa-plus"></i></span>
                    <span className='p-3'>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-solid fa-pen"></i>
                        </button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit chart</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className='list-group'>
                                    {data.bar[0].map((e,i) => (
                                        <li id={i} className='list-group-item text-left'>
                                            name:{e.x}-level:{e.y}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </span>
                    <span className='p-3'><i className="fa-solid fa-trash"></i>
                </span>
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