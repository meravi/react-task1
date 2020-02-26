import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
            <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">Stories<span>.</span></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
              {/* <a href="index.html" className="nav-link">Home</a> */}
            </li>
            <li className="nav-item">
      <Link to='/holiday' className="nav-link">Holiday</Link>
             
            </li>
            <li className="nav-item">
              <Link to="/recent" className="nav-link">Recent</Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">Featured Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    )
  }
}
