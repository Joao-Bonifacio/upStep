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
        fetch('http://localhost:8080/cards',{ headers: headers })
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
                let preval = data
                preval.cards.push({priority:priority,title:title,description:description})
                setData(preval)
                let config = {
                    headers: {
                        key: document.cookie,
                    }
                }
                axios.post('http://localhost:8080/addCards',{data:preval},config)
                getCards()
            }else{
                setData([{priority:priority,title:title,description:description}])
                let config = {
                    headers: {
                    key: document.cookie,
                    }
                }
                let preval = data
                axios.post('http://localhost:8080/addCharts',{data:preval,first:true},config)
                getCards()
            }
        }
    }
    
    const dropCard = async ()=>{
        let card = String(prompt('title: '))
        let preval = data
        if (card != null) {
            for (let i = 0; i < preval.cards.length; i++) {
                console.log(preval.cards[i])
                if (preval.cards[i].title === card) {
                    preval.cards.splice(i)
                    setData(preval)
                    let config = {
                        headers: {
                            key: document.cookie,
                        }
                    }
                    axios.post('http://localhost:8080/dropCard',{data:preval},config)
                    getCards()
                }
            }
        }
    }
    
    return(
        <div className='container mb-2 bg-white' style={{borderRadius:'8px',padding:'2rem'}}>

            <div className="row con">
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
                            <input type='text' placeholder='title' size='13' required/>
                        </h5>
                        <div className="row">
                            <p className="card-text col-10 m-0">
                                <textarea placeholder="description" required></textarea>
                            </p>
                            <button type="button" className="btn p-3 col-2" onClick={addCard}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
              
            

        </div>
    )
}