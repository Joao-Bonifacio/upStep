import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])
    const header = {
        'Access-Control-Allow-Origin':'*/*',
        'key':'b43e19bcdf3fe7dadaaeb7e6996d430e'
    }

    useEffect(()=>{
        fetch('http://localhost:8080',header)
        .then(res => res.json())
        .then(res => setUsr(res))
    },[])
    
    return(
        <div>
            {usr.name}
        </div>
    )
}