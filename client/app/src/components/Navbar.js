export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-secondary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://jj.me:3000">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="http://jj.me:3000">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="http://jj.me:3000">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="http://jj.me:3000">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://jj.me:3000" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul className="dropdown-menu bg-secondary">
                            <li><a className="dropdown-item" href="http://jj.me:3000">Action</a></li>
                            <li><a className="dropdown-item" href="http://jj.me:3000">Another action</a></li>
                            <li><a className="dropdown-item" href="http://jj.me:3000">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}