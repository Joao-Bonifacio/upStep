import {React, useState, useEffect} from 'react'
import Login from './login'

export default function ApiData() {
    const [usr,setUsr] = useState([])

    useEffect(()=>{
        let headers = {
            'method': 'GET',
            'accept': 'application/json',
            'key': document.cookie,
            'redirect': 'follow',
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
    }else if(window.location.href.includes('?')){
        let url = window.location.href.split('?')
        //let exp = new Date(new Date().getTime() + 15 * 60 * 1000)
        document.cookie = `${url[1]}; expires=Thu, 29 Nov 00:00:00 UTC;`
        console.log(document.cookie)
        console.log(url)
        setTimeout(() => { window.location.href = 'http://jj.me:3000/' }, 5000);
    }else if(!window.location.href.includes('?') && !document.cookie){
        return (
            <>
                <Login/>
            </>
        )
    }
}