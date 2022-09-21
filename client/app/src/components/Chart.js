import ApexCharts from 'react-apexcharts'
import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Chart(){
    var template_bar = {x:'',y:0,goals: [{name: 'Expected', value:0, strokeHeight: 5, strokeColor: '#775DD0'}]}

    const [data,setData] = useState({
        bar:[{x:'Exemple',y:0,goals:[{value:0}]}],
        line:[{x:'',y:0}]
    })
    
    const addChart = ()=>{
        //console.log(data)
        //console.log(data.bar.length)
        let x = prompt('name: ')
        let y = Number(prompt('level: '))
        let expected = Number(prompt('expected: '))

        template_bar.x = x
        template_bar.y = y
        template_bar.goals[0].value = expected
        console.log('template_bar_',template_bar)

        if(x != null && y != null && data){
            if (data.bar[0].x !== 'Exemple') {
                let preval = data
                preval.bar.push(template_bar)
                setData(template_bar)
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCharts',{data:preval},config)
                window.location.reload()
            }else{
                let preval = {
                    bar:[template_bar],
                    line:[{x:x,y:0}]
                }
                setData(preval)
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                //console.log(preval)
                axios.post('http://localhost:8080/addCharts',{data:preval,first:true},config)
                window.location.reload()
            }
        }
    }
    const dropChart = async ()=>{
        let x = String(prompt('name: '))
        let preval = data
        if (x != null) {
            console.log('on f-if')
            for (let i = 0; i < preval.bar.length; i++) {
                console.log(preval.bar[i])
                if (preval.bar[i].x === x) {
                    console.log('in s-if')
                    console.log(preval.bar)
                    preval.bar.splice(i)
                    //setData(preval)
                    let config = {
                        headers: {
                            key: document.cookie,
                            //set: 'drop'
                        }
                    }
                    axios.post('http://localhost:8080/dropCharts',{data:preval},config)
                    window.location.reload()
                }
            }
        }
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
            .then(res => {if (res){ setData(res) }})
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
        data: data.bar
    }]
        
    return(
    <div className="container bg-light p-3 mb-5" style={{borderRadius:'8px'}}>
        <div className='row text'>
            <div className='col-6'>sef improvment</div>

            <div className='col-6' style={{cursor:'pointer',right:0,textAlign:'right'}}>

                <span>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit chart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className='list-group toolbar'>
                                {data.bar.map((e,i) => ( 
                                    <li id={i} className='list-group-item'> 
                                        {e.x} - level:{e.y} - expected: {e.goals[0].value}
                                        <span id={`${i}-edit` }></span>
                                    </li>
                                ))}
                            </ul>
                                <button type="button" className="btn p-3" onClick={addChart}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>

                                <button type="button" className="btn p-3" onClick={dropChart}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </span>

                <span>
                    <button type="button" className="btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
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
//caractere invisível
//‎