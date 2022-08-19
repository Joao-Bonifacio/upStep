import {React, useState, useEffect} from 'react'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080',{
            method:'GET',
            'Access-Control-Allow-Origin':'http://localhost:8080',
            credentials:'same-origin',
            cookie:document.cookie
        })
        .then(res => res.json())
        .then(res => setUsr(res))
        //.then(res => console.log(res))
        //.catch(error => console.log(error.message))
    },[])
    
    return(
        <div>
            {usr[0].name}
            <script>{console.log(usr)}</script>
        </div>
    )
}