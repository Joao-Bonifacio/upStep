import {React, useState, useEffect} from 'react'

export default async function ApiData() {
    const [usr,setUsr] = useState([])
    document.cookie = "25"

    useEffect(()=>{
        fetch('http://localhost:8080')
        .then(res => res.json())
        .then(res => setUsr(res))
    })
    return(
        <div>
            testando
            {data.map(e=>
                <div key={e.id}>{e.name}</div>
            )}
        </div>
    )
}