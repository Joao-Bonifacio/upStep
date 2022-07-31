import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        const headers = {"cookie": "cookie_test"}
        fetch('http://localhost:8090',headers)
        .then(res => res.json())
        .then(res => setUsr(res))
    })
    console.log(usr)
    return(
        <div>
            testando
            {usr.map(e=>
                <div key={e.id}>{e.name}</div>
            )}
        </div>
    )
}