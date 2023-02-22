// import React from "react"

import pkgLogo from '../assets/images/pkg_logo.png'

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-primary fixed-top" >
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src={pkgLogo} height="64" alt="Protein Knowledge Graph" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Data</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Nodes</a>
                                    <a href="#" className="dropdown-item">Relationships</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">Sources</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Browser</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Graph Data Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GraphQL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SPARQL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Documentation</a>
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
