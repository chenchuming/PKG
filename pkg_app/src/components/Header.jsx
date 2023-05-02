
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import pkgLogo from '../assets/images/pkg_logo.png'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-primary fixed-top" >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={pkgLogo} height="64" alt="Protein Knowledge Graph" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-md-0">
                            <CustomLink to="/">Home</CustomLink>
                            {/* <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Data</a>
                                <div className="dropdown-menu">
                                    <Link to='/nodes' className="dropdown-item">Nodes</Link>
                                    <Link to='/relationships' className="dropdown-item">Relationships</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/sources' className="dropdown-item">Sources</Link>
                                </div>
                            </li> */}

                            <CustomLink to="/data">Data </CustomLink>
                            <CustomLink to="/browser">Browser </CustomLink>
                            <CustomLink to="/gdsl">GDSL</CustomLink>
                            <CustomLink to="/graphql">API </CustomLink>
                            <CustomLink to="/sparql">SPARQL </CustomLink>
                            <CustomLink to="/docs">Docs</CustomLink>
                        </ul>
                        <form className="d-flex w-25">
                            <input className="form-control me-2" type="search" placeholder="nodes, relationships ..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    console.log(resolvedPath)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    if (resolvedPath.pathname === "/data")
        return (
            <li className="nav-item dropdown active">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Data</a>
                <div className="dropdown-menu">
                    <Link to='/nodes' className="dropdown-item">Nodes</Link>
                    <Link to='/relationships' className="dropdown-item">Relationships</Link>
                    <div className="dropdown-divider"></div>
                    <Link to='/sources' className="dropdown-item">Sources</Link>
                </div>
            </li>
        )
    else
        return (
            <li className="nav-item" >
                <Link className={isActive ? "nav-link active" : "nav-link"} to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
}
export default Header
