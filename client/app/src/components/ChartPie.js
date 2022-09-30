import { useEffect, useState } from 'react'
import ApexCharts from 'react-apexcharts'
import axios from 'axios'

export default function ChartPie(){
    const [data,setData] = useState({
        pie:[
            {series:[1,2,3],labels:['name1','name2','name3']},
            {series:[1,2,5],labels:['name1','name2','name3']},
            {series:[2,3,3],labels:['name1','name2','name3']}
        ]
    })
    
    useEffect(()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin',
            scope: 'chart'
        }
        fetch('http://localhost:8080/',{ headers: headers })
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err.message))
    },[])
    
    const addPie = ()=>{
        let sendVal = data
        if (sendVal.pie[0].labels[0] === 'name1') {
            let setLabelMain = prompt('Insert one of your main activity: ')
            let setSerieMain = Number(prompt('How much time do you dedicate?: '))
            let setLabelSecondary = prompt('Insert one of secondary your activity: ')
            let setSerieSecondary = Number(prompt('How much time do you dedicate?: '))
            let setLabelHobbie = prompt('Insert one of your hobbie: ') 
            let setSerieHobbie = Number(prompt('How much time do you dedicate?: '))

            if (setLabelMain !== null && setSerieMain !== null && setLabelSecondary !== null && setSerieSecondary !== null && setLabelHobbie !== null && setSerieHobbie !== null) {
                sendVal.pie[0].labels[0] = [setLabelMain]
                sendVal.pie[0].series[0] = [setSerieMain]
                sendVal.pie[1].labels[0] = [setLabelSecondary]
                sendVal.pie[1].series[0] = [setSerieSecondary]
                sendVal.pie[2].labels[0] = [setLabelHobbie]
                sendVal.pie[2].series[0] = [setSerieHobbie]

                setData(sendVal)
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addPies',{data:sendVal},config)
                window.location.reload()                
            }
        }else{
            let setLabel = prompt('Insert activity: ')
            let setSerie = Number(prompt('How much time do you dedicate?: '))
            let scope = prompt('Insert where? (main/secondary/hobbies): ')
            let bypass = true

            switch (scope) {
                case 'main':
                    scope = 0
                    break;
                case 'secondary':
                    scope = 1
                    break;
                case 'hobbies':
                    scope = 2
                    break;
                default:
                    bypass = false
                    alert('failed to add activitys')
            }
            // eslint-disable-next-line use-isnan
            if (setSerie !== null && setLabel !== null && scope !== null && typeof(setSerie) !== NaN && bypass) {
                sendVal.pie[scope].labels.push(setLabel)
                sendVal.pie[scope].series.push(setSerie)
            
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
    }
    const dropPie = ()=>{
        let label = prompt('activity: ')
        let scope = prompt('Drop where? (main/secondary/hobbies): ')
        let sendVal = data
        let bypass = true

        if (scope !== null && label !== null) {
            switch (scope) {
                case 'main':
                    scope = 0
                    break;
                case 'secondary':
                    scope = 1
                    break;
                case 'hobbies':
                    scope = 2
                    break;
                default:
                    bypass = false
                    alert('failed to add activitys, value of chart invalid')
            }

            if (bypass && (sendVal.pie[scope].labels.length >= 2 || sendVal.pie[scope].series.length >= 2)) {
                for (let i = 0; i < sendVal.pie[scope].labels.length; i++) {
                    if (sendVal.pie[scope].labels[i] === label) {
                        sendVal.pie[scope].labels.splice(i,1)
                        sendVal.pie[scope].series.splice(i,1)
                    }
                }
                
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/dropPies',{data:sendVal},config)
                window.location.reload()
                
            }else{
                alert('insert a new activity before drop item')
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
                                    <li id={e.series[i]} className='list-group-item'>{JSON.stringify(e.labels)} =&gt; {JSON.stringify(e.series)}</li>
                                ))}
                            </ul>
                            <p></p>
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