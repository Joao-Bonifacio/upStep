import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080')
        .then(res => res.json())
        .then(res => setUsr(res))
    })
    return(
        <div>
            oi
            <script>{console.log(usr)}</script>
        </div>
    )
}