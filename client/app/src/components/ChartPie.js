import { useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts'
import axios from 'axios'

export default function ChartPie(){
    
    const [data,setData] = useState({
        pie:[
            {series:[1,2,3],labels:['0name1','0name2','0name3']},
            {series:[1,2,5],labels:['1name1','1name2','1name3']},
            {series:[2,3,3],labels:['2name1','2name2','2name3']}
        ]
    })
    
    const getPie = ()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin',
            scope: 'chartpie'
        }
        fetch('http://localhost:8080/pie',{ headers: headers })
            .then(res => res.json())
            .then(res => {if (res){ setData(res) }})
            .catch(err => console.log(err.message))
    }
    useEffect(getPie,[])
    
    const addPie = ()=>{
       let setLabel = String(prompt('Insert activity: '))
       let setSerie = Number(prompt('How much time do you dedicate?: '))
       let scope = String(prompt('Insert where? (main/secondary/hobbies): '))
       let sendVal = data
       setSerie = Number(setSerie)

       // eslint-disable-next-line use-isnan
       if (setSerie!== null && setLabel !== null && scope !== null && typeof(setSerie) !== NaN) {
        if (sendVal.pie[0].labels[0] !== '0name1') {
            switch (scope) {
                case 'main':
                    sendVal.pie[0].labels.push(setLabel)
                    sendVal.pie[0].series.push(setSerie)
                    break;
                case 'secondary':
                    sendVal.pie[1].labels.push(setLabel)
                    sendVal.pie[1].series.push(setSerie)
                    break;
                case 'hobbies':
                    sendVal.pie[2].labels.push(setLabel)
                    sendVal.pie[2].series.push(setSerie)
                    break;
                default:
                    alert('failed to add activitys')
            }
        }else{
            switch (scope) {
                case 'main':
                    sendVal.pie[0].labels = [setLabel]
                    sendVal.pie[0].series = [setSerie]
                    break;
                case 'secondary':
                    sendVal.pie[1].labels = [setLabel]
                    sendVal.pie[1].series = [setSerie]
                    break;
                case 'hobbies':
                    sendVal.pie[2].labels = [setLabel]
                    sendVal.pie[2].series = [setSerie]
                    break;
                default:
                    alert('failed to add activitys')
            }
        }
        setData(sendVal)
        let config = {
            headers: {
                key: document.cookie,
            }
        }
        axios.post('http://localhost:8080/addPies',{data:sendVal},config)
        window.location.reload()
       }
    }
    const dropPie = async ()=>{
        let x = String(prompt('activity: '))
        let sendVal = data
        if (x != null) {
            for (let i = 0; i < sendVal.bar.length; i++) {
                if (sendVal.bar[i].x === x) {
                    sendVal.bar.splice(i)
                    setData(sendVal)
                    let config = {
                        headers: {
                            key: document.cookie,
                        }
                    }
                    axios.post('http://localhost:8080/dropCharts',{data:sendVal},config)
                    //getCharts()
                    window.location.reload()
                }
            }
        }
    }

    return(
        <div className='container bg-light p-3' style={{borderRadius:'8px',margin:'50px auto'}}>
            
            <div className='row'>
                <div className='col-10 container'>soldier⏳</div>
                <div className="col-2" style={{textAlign:'right'}}>
                <span>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#pieModal">
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <div className="modal fade" id="pieModal" tabIndex="-1" aria-labelledby="pieModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="pieModalLabel">Edit time</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className='list-group toolbar'>
                                {data.pie.map( (e, i) =>(
                                    <li id={e.labels[i]} className='list-group-item'>{e.labels[i]} = {e.series[i]}</li>
                                ))}
                            </ul>
                                <button type="button" className="btn p-3" onClick={addPie}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>

                                <button type="button" className="btn p-3" onClick={dropPie}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                            <button type="button" className="btn btn-primary" 
                            onClick={(e)=> {e.preventDefault();window.location.reload()}}>Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </span>
                    <button type="button" className="btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>

            <div className='container-sm row text-center m-auto'>
                <div className='col-4 p-3' style={{width:'400px'}}>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[0].labels}}
                            series={data.pie[0].series}
                            type="pie"
                            width={'100%'}
                        />
                        <div>main</div>
                    </div>
                </div>

                <div className='col-4 p-3' style={{width:'400px'}}>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[1].labels}}
                            series={data.pie[1].series}
                            type="pie"
                            width={'100%'}
                        />
                        <div>secondary</div>
                    </div>
                </div>

                <div className='col-4 p-3' style={{width:'400px'}}>
                    <div className='text-center'>
                        <ApexCharts
                            options={{labels:data.pie[2].labels}}
                            series={data.pie[2].series}
                            type="pie"
                            width={'100%'}
                        />
                        <div>hobbies</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}