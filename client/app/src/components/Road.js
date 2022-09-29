import { React, useState, useEffect } from "react"
import axios from "axios"

export default function Road(){
    const [data,setData] = useState({
        cards:[{priority:'priority',title:'title',description:'description'}]
    })

    const getCards = ()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin',
            //scope: 'cards'
        }
        fetch('http://localhost:8080/',{ headers: headers })
            .then(res => res.json())
            .then(res => {if (res){ setData(res) }})
            .catch(err => console.log(err.message))
    }

    //useEffect(getCards,[])
    
    const addCard = ()=>{
        let priority = document.getElementById('priority').value
        let title = document.getElementById('title').value
        let description = document.getElementById('desc').value

        if(priority !== null && title !== null && description !== null && data){
            if (data.cards[0].priority !== 'priority') {
                let sendVal = data
                sendVal.cards.push({priority:priority,title:title,description:description})
                setData(sendVal)
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCards',{data:sendVal},config)
                getCards()
            }else{
                setData([{priority:priority,title:title,description:description}])
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                let sendVal = data
                axios.post('http://localhost:8080/addCharts',{data:sendVal,first:true},config)
                getCards()
            }
        }
    }
    
    const dropCard = async ()=>{
        let card = String(prompt('title: '))
        let sendVal = data
        if (card != null) {
            for (let i = 0; i < sendVal.cards.length; i++) {
                console.log(sendVal.cards[i])
                if (sendVal.cards[i].title === card) {
                    sendVal.cards.splice(i)
                    setData(sendVal)
                    let config = {
                        headers: {
                            key: document.cookie,
                        }
                    }
                    axios.post('http://localhost:8080/dropCard',{data:sendVal},config)
                    getCards()
                }
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
                    {data.cards.map(e => (
                        <div className="card text-bg-primary mb-3 col-4 m-2" style={{maxWidth:'18rem'}}>
                            <div className="card-header">{e.priority}</div>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                            </div>
                        </div>
                    ))}
    
                <div className="card text-bg-primary mb-3 col-4 m-2" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Add Card +</div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <input type='text' placeholder='title' className="input-road" maxLength='60' required/>
                            </h5>
                            <div className="row">
                                <p className="card-text col-10 m-0 pl-3">
                                    <textarea placeholder="description" className="input-road" maxLength='400' style={{width:'100%',height:'80px'}} required></textarea>
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