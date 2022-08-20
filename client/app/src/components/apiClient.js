import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        let headers = {
            'accept': 'application/json',
            'key': document.cookie,
            'origin':'same-origin'
        }
        fetch('http://localhost:8080',{ headers: headers })
        .then(res => res.json())
        .then(res => setUsr(res))
    },[])
    
    return(
        <div>
            {usr.name}
        </div>
    )
}