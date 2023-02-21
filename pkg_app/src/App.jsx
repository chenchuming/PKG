import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import pkgLogo from './assets/images/pkg_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-primary fixed-top" >
        <div className="container-fluid">
          <a href="#" classNameName="navbar-brand">
            <img src={pkgLogo} height="60" alt="Protein Knowledge Graph" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Data</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Browser</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">GDS</a>
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
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search KG" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
