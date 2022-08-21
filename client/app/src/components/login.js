//import {React, useState, useEffect} from 'react'

export default function Login(props){
    
    return(
        <>
            <form method={'POST'} action={'http://localhost:8080/login'}>
                <input type={'text'} name={'login'} placeholder={'login'} required/>
                <input type={'password'} name={'password'} placeholder={'password'} required/>
                <input type={'submit'} value={'Submit'} />
            </form>
        </>
    )
}