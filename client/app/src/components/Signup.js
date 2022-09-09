export default function Signup(){
    const verifyPasswd = (e)=>{
        e.preventDefault()
        const password = document.querySelector('input[name=password]')
        const cpassword = document.querySelector('input[name=cpassword]')
        
        if (cpassword.value === password.value) {
            cpassword.setCustomValidate('')
        }else{
            cpassword.setCustomValidate('Not same')
        }
    }
    while (!document.cookie) {
        return(
            <>

            <div className='container-sm mt-5 bg-white' style={{maxWidth: '500px',borderRadius: '8px'}}>
                <form method={'POST'} action={'http://localhost:8080/signup'} className="pt-4 pb-4">
                    <h3 className="text-center">signup</h3>

                   <div className="row">
                        <div className="mb-3 col-6">
                            <label forhtml="name" className="form-label">Full Name</label>
                            <input type="name" className="form-control" id="name" name="name" required/>
                        </div>
    
                        <div className="mb-3 col-6">
                            <label forhtml="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="login" required/>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-6" id="datepicker">
                            <span className="input-group-text bg-light d-block">
                                Born date: <input type="date" name="born" className="form-control"/>
                            </span>
                        </div>

                        <div className="col-6">
                            <span className="form-check">
                                <input className="form-check-input" type="radio" name="sex" id="M" value="M" defaultChecked/>
                                <label className="form-check-label" htmlfor="M">Are you Male?</label>
                            </span>
                            <br/>
                            <span className="form-check">
                                <input className="form-check-input" type="radio" name="sex" id="F" value="F"/>
                                <label className="form-check-label" htmlfor="F">Are you Female?</label>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="mb-3 col-6">
                            <label forhtml="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={verifyPasswd} required/>
                        </div>
                        <div className="mb-3 col-6">
                            <label forhtml="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={verifyPasswd} required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select" name="country">
                                <option selected>Select your country</option>
                                <option value="Brasil">Brasil</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Japan">Japan</option>
                                <option value="England">England</option>
                            </select>
                        </div>   
    
                        <div className="mb-3 form-check col-6">
                            <input type="checkbox" className="form-check-input" id="check" required/>
                            <label className="form-check-label" forhtml="check">I promise that i will studdy a lot</label>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary me-3">Signup</button>
                        <span className="ms-3"><a href="http://jj.me:3000/login">Login</a></span>
                    </div>
                </form>   
            </div>
            </>
        )
    }
}