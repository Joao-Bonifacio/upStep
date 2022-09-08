export default function Sigin(props){
    //console.log(props.children)
    while (!document.cookie) {
        return(
            <>
                <form method={'POST'} action={'http://localhost:8080/sigin'} id={'form'}>
                    <input type={'name'} name={'name'} placeholder={'name'} required/>
                    <input type={'email'} name={'login'} placeholder={'email'} required/>
                    <input type={'date'} name={'born'} placeholder={'born-date'}/>
                    <div>
                        <label htmlFor={'M'}>Male</label>
                        <input type={'radio'} name={'sex'} id={'M'} value={'M'} required/>
                        <label htmlFor={'F'}>Female</label>
                        <input type={'radio'} name={'sex'} id={'F'} value={'F'} required/>
                    </div>
                    <input type={'password'} name={'password'} placeholder={'password'} required/>
                    <input type={'password'} name={'cpassword'} placeholder={'confirm password'} required/>
                    <label htmlFor={'country'}>Select you country:</label>
                    <select name={'country'}>
                        <option>Brasil</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Japan</option>
                        <option>England</option>
                    </select>
                    <input type={'submit'} value={'Submit'} />
                </form>
            </>
        )
    }
}