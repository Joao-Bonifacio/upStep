export default function Navbar(){
    const logOut = ()=>{
        let date = new Date()
        date.setTime(date.getTime()+(720/60/60/10000))
        let exp = date.toUTCString()
        document.cookie = `key=${document.cookie}; expires=${exp};`
        window.location.reload()
    }
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">upStep</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link breve" onClick={(e)=>{e.preventDefault();alert('coming soon...')}}>Forum</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://joao-bonifacio.github.io/Portifolio/" target="blank">Author</a>
                        </li>
                        <li className="nav-item dropdown ml-10">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-regular fa-user"></i>User
                            </a>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={logOut}>Log Out</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}