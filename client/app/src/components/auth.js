import {React, useState, useEffect} from 'react'
export default function Auth(){
    const [ck,setCk] = useState([])
    
    useEffect(()=>{
        let headers = {
            'method':'GET',
            'accept':'aplication/json',
            'redirect':'follow',
            'origin':'same-origin'
        }
        fetch('http://localhost:8080/login',{ headers: headers })
            .then(res => res.json())
            .then(res => setCk(res))
            .then(res => console.log(ck))
    },[])
    if (ck.length > 30) {
        return <script>{document.cookie = 'key'+'='+ck+';'+'expires=Thu, 29 Nov 00:00:00 UTC;'}</script>
    }
}