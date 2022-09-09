import Footer from "./Footer"
export default function Signup(props){
    //console.log(props.children)
    while (!document.cookie) {
        return(
            <>

            <div className='container-sm mt-5' style={{marginBottom:'90px',maxWidth: '500px',borderRadius: '8px',backgroundColor:'#CDCDCD'}}>
                <form method={'POST'} action={'http://localhost:8080/signup'} className="pt-4 pb-4">
                    <h3 className="text-center">signup</h3>

                    <div className="mb-3">
                        <label forhtml="name" className="form-label">Full Name</label>
                        <input type="name" className="form-control" id="name" name="name" required/>
                    </div>

                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="login" required/>
                        <div id="email" className="form-text">Input a valid email.</div>
                    </div>

                    <div class="input-group date" id="datepicker">
                        <span class="input-group-text bg-light d-block">
                            Born date: <input type="date" name="born" className="form-control"/>
                        </span>
                    </div>
                    <div>
                        <div className="form-text">What your sex?</div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sex" id="M" value="M" checked/>
                            <label class="form-check-label" for="M">Male</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sex" id="F" value="F"/>
                            <label class="form-check-label" for="F">Female</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label forhtml="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div>
                    <div className="mb-3">
                        <label forhtml="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" required/>
                    </div>

                    <select class="form-select" aria-label="Default select" name="country">
                        <option selected>Select your country</option>
                        <option value="Brasil">Brasil</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        <option value="England">England</option>
                    </select>   

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check" required/>
                        <label className="form-check-label" forhtml="check">I promise that i will studdy a lot</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary me-3">Signup</button>
                        <span className="ms-3"><a href="http://jj.me:3000/login">Login</a></span>
                    </div>
                </form>   
            </div>
            <Footer/>
            </>
        )
    }
}
/*
<form method={'POST'} action={'http://localhost:8080/signup'} id={'form'}>
    <input type={'name'} name={'name'} placeholder={'name'} required/>
    <input type={'email'} name={'login'} placeholder={'email'} required/>
    <input type="date" name="born" placeholder="born-date"/>
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

*/