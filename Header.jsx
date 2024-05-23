import React from 'react'
import '../Css/Header.css'

function Header() {
  return (
    <div>
      <header className="header">
  <div className="row-3 group">
  <div className="navbar">
  <a href="#login-section" className="login">Login</a>
      <a href="#signup-section" className="text">Sign up</a>
            </div>
            <div className="col-11">
                <div className="rectangle-3" />
                <div className="rectangle-3-copy" />
                <div className="rectangle-3-copy-2" />
            </div>
  </div>
  <img
    className="teaser"
    src="images/teaser.png"
    alt="Teaser"
    width={127}
    height={27}
    title="Teaser"
  />
  <div className="rectangle-4" />
  <p className="text-2">
    <span className="color0f2480">Modern </span>Apartment
    <br />
    House
  </p>
  <p className="text-3">
    It is a long established fact that a reader will be distracted by the
    readable content of
  </p>
  <button className="rectangle-5-holder">Read More</button>
  <div className="row match-height group">
            <div className="rectangle-7-holder">
                <input type="text" className="search-input" placeholder="Search Your Categories" />
            </div>
            <div className="rectangle-7-copy-holder">
                <input type="text" className="location-input" placeholder="Location" />
            </div>
            <div className="rectangle-7-copy-2-holder">
                <button className="search-button">Search</button>
            </div>
        </div>
</header>

    </div>
  )
}

export default Header
