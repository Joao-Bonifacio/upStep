import {React, useState, useEffect} from 'react'
import Login from './login'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        let headers = {
            'method': 'GET',
            'accept': 'application/json',
            'key': document.cookie,
            'origin': 'same-origin'
        }
        fetch('http://localhost:8080',{ headers: headers })
        .then(res => res.json())
        .then(res => setUsr(res))
    },[])
    
    if (document.cookie) {
        return(
            <div>
                {usr.name}
            </div>
        )
    }else{
        return (
            <>
                <Login/>
            </>
    )}
}