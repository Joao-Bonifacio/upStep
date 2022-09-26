import { useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts'
//import axios from 'axios'

export default function ChartPie(){
    
    const [data,setData] = useState({
        pie:[
            {series:[1,2,3],labels:['0name1','0name2','0name3']},
            {series:[1,2,5],labels:['1name1','1name2','1name3']},
            {series:[2,3,3],labels:['2name1','2name2','2name3']}
        ]
    })
    /*
    //data.pie[i].labels
    const getCharts = ()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin',
            scope: 'chartpie'
        }
        fetch('http://localhost:8080',{ headers: headers })
            .then(res => res.json())
            .then(res => {if (res){ setData(res) }})
            .catch(err => console.log(err.message))
    }
    useEffect(getCharts,[])

    const addChart = ()=>{
        let x = prompt('name: ')
        let y = Number(prompt('level: '))
        let expected = Number(prompt('expected: '))

        template_pie.x = x
        template_pie.y = y
        template_pie.goals[0].value = expected

        if(x != null && y != null && data){
            if (data.bar[0].x !== 'Exemple') {
                let preval = data
                preval.bar.push(template_pie)
                setData(preval)
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCharts',{data:preval},config)
                getCharts()
            }else{
                let preval = {
                    bar:[template_pie],
                    line:[{x:x,y:0}]
                }
                setData(preval)
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCharts',{data:preval,first:true},config)
                getCharts()
            }
        }
    }
    const dropChart = async ()=>{
        let x = String(prompt('name: '))
        let preval = data
        if (x != null) {
            for (let i = 0; i < preval.bar.length; i++) {
                if (preval.bar[i].x === x) {
                    preval.bar.splice(i)
                    setData(preval)
                    let config = {
                        headers: {
                            key: document.cookie,
                        }
                    }
                    axios.post('http://localhost:8080/dropCharts',{data:preval},config)
                    getCharts()
                }
            }
        }
    }*/

    //const series = [1,5,7]
    const options = {
        labels: ['name1','name2','name3']//data.pie.names,
    }

    return(
        <div className='container bg-light p-3' style={{borderRadius:'8px',margin:'50px auto'}}>
            
            <div className='row'>
                <div className='col-10 container'>soldier⏳</div>
                <div className="col-2" style={{textAlign:'right'}}>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-pen"></i>
                    </button>
                    <button type="button" className="btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>

            <div className='container-sm row'>
                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[0].labels}}
                            series={data.pie[0].series}
                            type="pie"
                            //height={'100%'}
                            width={'100%'}
                        />
                        <div>main</div>
                    </div>
                </div>

                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[1].labels}}
                            series={data.pie[1].series}
                            type="pie"
                            //height={'100%'}
                            width={'100%'}
                        />
                        <div>secondary</div>
                    </div>
                </div>

                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[2].labels}}
                            series={data.pie[2].series}
                            type="pie"
                            //height={'100%'}
                            width={'100%'}
                        />
                        <div>hobbies</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}