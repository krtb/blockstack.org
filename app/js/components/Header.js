'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container">
        <nav className="navbar">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="/images/blockstack-logo.svg" />
            </Link>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/docs" className="nav-link">Get Started</Link>
              </li>
              <li className="nav-item hidden-sm-down">
                <Link to="/docs/what-is-blockstack" className="nav-link">Overview</Link>
              </li>
              <li className="nav-item hidden-sm-down">
                <Link to="/docs/installation" className="nav-link">Installation</Link>
              </li>
              <li className="nav-item hidden-sm-down">
                <Link to="/docs/basic-usage" className="nav-link">Usage</Link>
              </li>
              <li className="nav-item pull-xs-right hidden-sm-down">
                <Link to="https://github.com/blockstack" className="nav-link hidden-xs hidden-sm"
                  target="_blank">
                  <i className="fa fa-github"></i>
                  <span>Github</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

}

export default Header