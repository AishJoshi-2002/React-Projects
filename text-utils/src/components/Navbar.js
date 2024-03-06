import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  // data-bs-theme="light"
  // data-bs-theme="dark"
  const [isLight, setIsLight] = useState(true)
  const handleOnToggle = ()=>{
    setIsLight(!isLight)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-color" data-bs-theme={isLight ? "light" : "dark"}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleOnToggle} />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string, homeText: PropTypes.string, aboutText: PropTypes.string }