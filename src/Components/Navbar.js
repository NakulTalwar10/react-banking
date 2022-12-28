import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount=useSelector(state=>state.amount)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Banking App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" disabled={true} placeholder={amount} aria-label="Search" />
              <button className="btn btn-outline-success" disabled={true} type="submit">Balance</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar