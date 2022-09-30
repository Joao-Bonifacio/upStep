import { React, useState, useEffect } from "react"
import axios from "axios"

export default function Road(){
    const [data,setData] = useState({
        card:[{priority:'priority',title:'title exemple',description:'exemple of description of card for note yours goals/strategys'}]
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
            .then(res => {if (res.card[0].priority){ setData(res) }})
            .catch(err => console.log(err.message))
    },[])
    
    const addCard = ()=>{
        let title = document.getElementById('title').value
        let description = document.getElementById('desc').value

        if(title !== null && description !== null && data){
            let priority = prompt('priority: ')

            if (data.card[0].priority !== 'priority') {
                let sendVal = data
                sendVal.card.push({priority:priority,title:title,description:description})
                setData(sendVal)
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCards',{data:sendVal},config)
                window.location.reload()
            }else{
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                let sendVal = data
                sendVal.card[0] = {priority:priority,title:title,description:description}
                axios.post('http://localhost:8080/addCharts',{data:sendVal},config)
                window.location.reload()
            }
        }
    }
    
    const dropCard = ()=>{
        let card = prompt('title: ')
        let bypass = false
        if (card !== null) {
            let sendVal = data
            for (let i = 0; i < sendVal.card.length; i++) {
                if (sendVal.card[i].title === card) {
                    sendVal.card.splice(i,1)
                    setData(sendVal)
                    bypass = true
                }
            }
            if (bypass) {
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/dropCards',{data:sendVal},config)
                window.location.reload()
            }
        }
    }
    
    return(
        <div className='container mb-2 bg-white p-3' style={{borderRadius:'8px'/*,padding:'1rem'*/}}>

            <div className="row">
                <div className="col-10">road🛣️</div>
                <div className="col-2" style={{textAlign:'right'}}>
                    <button type="button" className="btn" onClick={dropCard}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button type="button" className="btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>

            <div className="p-3">
                <div className="row mt-2 mb-2">
                {data.card.map((e,i) => (
                    <div className="card text-bg-primary mb-3 col-4 m-2" id={String(i)} style={{maxWidth:'20rem',minWidth:'20rem'}}>
                        <div className="card-header">{e.priority}</div>
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.description}</p>
                        </div>
                    </div>
                ))}
    
                <div className="card text-bg-primary mb-3 col-4 m-2" style={{maxWidth:'20rem',minWidth:'20rem'}}>
                    <div className="card-header">Add Card +</div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <input type='text' placeholder='title' id='title' className="input-road" maxLength='60' required/>
                            </h5>
                            <div className="row">
                                <p className="card-text col-10 m-0 pl-3">
                                    <textarea placeholder="description" className="input-road" id='desc' maxLength='400' style={{width:'100%',height:'80px'}} required></textarea>
                                </p>
                                <button type="button" className="btn p-0 col-2" onClick={addCard}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}