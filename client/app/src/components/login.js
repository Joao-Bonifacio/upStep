export default function Login(){
    while (!document.cookie) {
        return(
            <div className='container mt-3'>
                <form method={'POST'} action={'http://localhost:8080/login'}>
                    <input type={'email'} name={'login'} placeholder={'login'} required/>
                    <input type={'password'} name={'password'} placeholder={'password'} required/>
                    <input type={'submit'} value={'Submit'} /><span>or</span><a href={'http://jj.me:3000/sigin'}>Register</a>
                </form>
                
            </div>
        )
    }
}