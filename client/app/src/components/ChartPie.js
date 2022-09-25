//import { useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts'
//import axios from 'axios'

export default function ChartPie(){
    /*var template_pie = {x:'',y:0,goals: [{name: 'Expected', value:0, strokeHeight: 5, strokeColor: '#775DD0'}]}
    const [data,setData] = useState({
        pie:[{series:[0],labels:['name']}]
    })
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
            console.log('on f-if')
            for (let i = 0; i < preval.bar.length; i++) {
                console.log(preval.bar[i])
                if (preval.bar[i].x === x) {
                    console.log('in s-if')
                    console.log(preval.bar)
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

    const series = [1,5,7]//data.line.values //array
    const options = {
        labels: ['name1','name2','name3'],//data.pie.names,
    }

    return(
        <div className='container bg-light p-3 row' style={{borderRadius:'8px',margin:'50px auto'}}>
            
            <div className='col-12'>soldier⏳</div>

            <div className='container-sm row'>
                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="pie"
                            height={600}
                            width={380}
                        />
                        <div>main</div>
                    </div>
                </div>

                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="pie"
                            height={600}
                            width={380}
                        />
                        <div>secondary</div>
                    </div>
                </div>

                <div className='col-4 p-3'>
                    <div className='text-center'>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="pie"
                            height={600}
                            width={380}
                        />
                        <div>hobbies</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}