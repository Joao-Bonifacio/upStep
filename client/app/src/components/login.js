export default function Login(){
    while (!document.cookie) {
        return(
            <>
                <form method={'POST'} action={'http://localhost:8080/login'}>
                    <input type={'email'} name={'login'} placeholder={'login'} required/>
                    <input type={'password'} name={'password'} placeholder={'password'} required/>
                    <input type={'submit'} value={'Submit'} />
                </form>
            </>
        )
    }
    if(document.cookie){
        window.location.href = 'http://localhost:3000'
    }
}