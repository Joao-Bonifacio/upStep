export default function Login(){
    while (!document.cookie) {
        return(
            <div className='container mt-3'>
                <form method={'POST'} action={'http://localhost:8080/login'}>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="login" required/>
                        <div id="email" className="form-text">Input a valid email.</div>
                    </div>
                    <div className="mb-3">
                        <label forhtml="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                        <label className="form-check-label" forhtml="exampleCheck1">I promise that i will studdy a lot</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <span><a href="http://jj.me:3000/sigin">sigin</a></span>
                </form>   
            </div>
        )
    }
}