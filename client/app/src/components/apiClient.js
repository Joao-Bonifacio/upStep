import {React, useState, useEffect} from 'react'
import Navbar from './Navbar'
import Login from './login'
import Signup from './Signup'

export default function ApiData() {
    const [usr,setUsr] = useState([])

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
    },[])
    
    if (document.cookie) {
        return(
            <>
                <Navbar/>
                <div className="container mt-5">{usr.name}</div>
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