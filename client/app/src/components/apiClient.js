import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080',{
            method:'GET',
            'Access-Control-Allow-Origin':'*/*',
            credentials:'same-origin',
            cookie:document.cookie
        })
        .then(res => res.json())
        .then(res => setUsr(res))
    },[])
    
    return(
        <div>
            {usr.name}
        </div>
    )
}