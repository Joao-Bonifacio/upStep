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
       console.log('adicionar gráfico')
    }
    const dropPie = async ()=>{
        console.log('remover gráfico')
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
                                {}
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