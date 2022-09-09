export default function Footer(){
    return(
        <>
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-white" style={{position:'fixed',bottom:0,right:0,left:0}}>
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg src="/client/app/public/favicon.ico" className="bi" width="30" height="24"></svg>
                </a>
                <span className="mb-3 mb-md-0 text-muted">&copy; 2022 João Bonifácio</span>
                </div>
            
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-3">
                    <li className="ms-3"><a className="text-muted" href="https://github.com/Joao-Bonifacio" target="blank"><i className="fa-brands fa-github"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/" target="blank"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/jao_jj_/" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </footer>
        </div>
        </>
    )
}

