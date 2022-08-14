import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])
    const header = {
        'Access-Control-Allow-Origin':'*/*',
    }

    useEffect(()=>{
        fetch('http://localhost:8080',header)
        .then(res => res.json())
        .then(res => setUsr(res))
        .then(JSON.stringify(usr))
    })
    
    return(
        <div>
            {usr}
        </div>
    )
}