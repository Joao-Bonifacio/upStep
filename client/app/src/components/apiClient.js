import {React, useState, useEffect} from 'react'
import Chart from './Chart'
import Navbar from './Navbar'
import Login from './login'
import Signup from './Signup'

export default function ApiData() {
    let template_bar = {x:'nomme',y:5,goals: [{name: 'Expected', value:0, strokeHeight: 5, strokeColor: '#775DD0'}]}

    useEffect(()=>{
        let headers = {
            method: 'GET',
            accept: 'application/json',
            key: document.cookie,
            redirect: 'follow',
            origin: 'same-origin'
        }
        fetch('http://localhost:8080',{ headers: headers })
            .then(res => res.json())
            .then(res => setUsr(res))
            .catch(err => console.log(err.message))
    },[])

    const [usr,setUsr] = useState([{},{
        bar:[{x:0,y:0,goals:[]}],
        line:[{x:0,y:0}]
    }])

    const addChart = ()=>{
        let x = prompt('name: ')
        let y = Number(prompt('level'))
        let expected = Number(prompt('expected: '))
        template_bar.x = x
        template_bar.y = y
        template_bar.goals[0].value = expected
        let preval = usr

        preval[1].bar[0].push(template_bar)
        setUsr(preval)
        console.log(usr)

        let chart = document.getElementById('frameChart')
        console.log(chart)
        //setAttribute('data',usr[1].bar)
    }
    
    if (document.cookie) {
        return(
            <>
                <Navbar/>
                <div className="container mt-5">{usr[0].name}</div>
                    <div className="container bg-light p-3 mb-5" style={{borderRadius:'8px'}}>
                        <div className='row text'>
                            <div className='col-6'>sef improvment</div>
                            <div className='col-6 text-right' style={{cursor:'pointer',right:0,textAlign:'right'}}>
                                <span onClick={addChart} className='p-3'><i class="fa-solid fa-plus"></i></span>
                                <span className='p-3'><i class="fa-solid fa-pen"></i></span>
                                <span className='p-3'><i class="fa-solid fa-trash"></i></span> 
                            </div>
                        </div>
                    <Chart id={'frameChart'} data={usr[1].bar} />
                </div>
            </>
        )
    }else if(window.location.href.includes('?')){
        let url = window.location.href.split('?')
        let date = new Date()
        date.setTime(date.getTime()+(720*60*60*10000))
        let exp = date.toUTCString()
        document.cookie = `${url[1]}; expires=${exp};`
        window.location.href = 'http://jj.me:3000/'
    }else if(!window.location.href.includes('?') && !window.location.href.includes('signup') && !document.cookie){
        return (
            <>
                <Login/>
            </>
        )
    }else if(window.location.href.includes('signup')){
        return (
            <>
                <Signup/>
            </>
        )
    }
}