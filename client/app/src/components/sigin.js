export default function Sigin(props){
    //console.log(props.children)
    while (!document.cookie) {
        return(
            <>
                <form method={'POST'} action={'http://localhost:8080/sigin'}>
                    <input type={'name'} name={'name'} placeholder={'name'} required/>
                    <input type={'email'} name={'login'} placeholder={'login'} required/>
                    <input type={'date'} name={'born'} placeholder={'born-date'}/>
                    <div>
                        <label for={'M'}>Male</label>
                        <input type={'radio'} name={'sex'} id={'M'} value={'M'} required/>
                        <label for={'F'}>Female</label>
                        <input type={'radio'} name={'sex'} id={'F'} value={'F'} required/>
                    </div>
                    <input type={'password'} name={'password'} placeholder={'password'} required/>
                    <input type={'password'} name={'cpassword'} placeholder={'confirm password'} required/>
                    <label for={'country'}>Select you country:</label>
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