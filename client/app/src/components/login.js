//import {React, useState, useEffect} from 'react'

export default function Login(){

    return(
        <>
            <form method={'POST'} action={'http://localhost:8080/login'}>
                <input type={'text'} name={'login'} placeholder={'login'} />
                <input type={'password'} name={'password'} placeholder={'password'} />
                <input type={'submit'} value={'Submit'} />
            </form>
            <div>{location.url.split('?')[1]}</div>
        </>
    )
}