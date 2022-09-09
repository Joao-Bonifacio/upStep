import Footer from "./Footer"
export default function Login(){
    while (!document.cookie) {
        return(
            <>
                <div className='container-sm mt-5' style={{maxWidth: '400px',borderRadius: '8px',backgroundColor:'#CDCDCD'}}>
                    <form method={'POST'} action={'http://localhost:8080/login'} className="pt-4 pb-4">
                        <h3 className="text-center">Login</h3>
                        <div className="mb-3">
                            <label forhtml="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="login" required/>
                        </div>
                        <div className="mb-3">
                            <label forhtml="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary me-3">Login</button>
                            <span className="ms-3"><a href="http://jj.me:3000/signup">sigin</a></span>
                        </div>
                    </form>
                </div>
                <Footer/>
            </>
        )
    }
}