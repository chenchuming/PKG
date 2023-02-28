// import React from "react"
import { Link } from "react-router-dom";
import pkgLogo from '../assets/images/pkg_logo.png'

function Navbar() {
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
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Data</a>
                                <div className="dropdown-menu">
                                    <Link to='/nodes' className="dropdown-item">Nodes</Link>
                                    <Link to='/relationships' className="dropdown-item">Relationships</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to='/sources' className="dropdown-item">Sources</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:7474/browser/">Browser</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/">Graph Data Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GraphQL</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sparql">SPARQL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/docs">Documentation</Link>
                            </li>
                            {/* <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
                        </ul>
                        <form className="d-flex w-25">
                            <input className="form-control me-2" type="search" placeholder="Search nodes, relationships ..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
