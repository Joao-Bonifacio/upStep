import {React, useState, useEffect} from 'react'
import Chart from './Chart'
import Navbar from './Navbar'
import Login from './login'
import Signup from './Signup'

export default function ApiData() {
    useEffect(()=>{
        let headers = {
            'method': 'GET',
            'accept': 'application/json',
            'key': document.cookie,
            'redirect': 'follow',
            'origin': 'same-origin'
        }
        fetch('http://localhost:8080',{ headers: headers })
            .then(res => res.json())
            .then(res => setUsr(res))
            .catch(err => console.log(err.message))
    },[])

    const [usr,setUsr] = useState([{},{
        bar:[{x:0,y:0}],
        line:[{x:0,y:0}]
    }])

    const addChart = ()=>{
        console.log('add')
    }
    const editChart = ()=>{
        console.log('edit')
    }
    const dropChart = ()=>{
        console.log('drop')
    }
    
    if (document.cookie) {
        return(
            <>
                <Navbar/>
                <div className="container mt-5">{usr[0].name}</div>
                    <div className="container bg-light p-3 mb-5" style={{borderRadius:'8px'}}>
                        <div className='row text'>
                            <div className='col-10'></div>
                            <div className='col-2 text-right' style={{cursor:'pointer',right:0,textAlign:'right'}}>
                                <span onClick={addChart} className='p-3'><i class="fa-solid fa-plus"></i></span>
                                <span onClick={editChart} className='p-3'><i class="fa-solid fa-pen"></i></span>
                                <span onClick={dropChart} className='p-3'><i class="fa-solid fa-trash"></i></span> 
                            </div>
                        </div>
                    <Chart data={usr[1].bar} />
                </div>
            </>
        )
    }else if(window.location.href.includes('?')){
        let url = window.location.href.split('?')
        let date = new Date()
        date.setTime(date.getTime()+(720*60*60*10000))
        let exp = date.toUTCString()
        document.cookie = `${url[1]}; expires=${exp};`
        window.location.href = 'http://jj.me:3000/'
    }else if(!window.location.href.includes('?') && !window.location.href.includes('signup') && !document.cookie){
        return (
            <>
                <Login/>
            </>
        )
    }else if(window.location.href.includes('signup')){
        return (
            <>
                <Signup/>
            </>
        )
    }
}