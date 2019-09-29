import React, { Component } from "react";
import "./Layout.scss";
import { NavLink } from "react-router-dom";

export default class Layout extends Component {
  state = {
    collapsed: false
  }

  handlerToogleSidebar = () => {
    this.setState({
      collapsed : !this.state.collapsed
    })
  };

  render() {
    let styles;
    if (this.state.collapsed){
       styles = "d-flex toggled";
    }else {
      styles = "d-flex";
    }

    return (
      <div className={styles} id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Shortcuts
            </NavLink>
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Overview
            </NavLink>
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Events
            </NavLink>
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Profile
            </NavLink>
            <NavLink
              to="/"
              className="list-group-item list-group-item-action bg-light text-secondary"
            >
              Status
            </NavLink>
          </div>
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button
              className="btn btn-primary"
              id="menu-toggle"
              onClick={this.handlerToogleSidebar}
            >
              Toggle Menu
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Link
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </NavLink>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/">
                      Action
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Another action
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/">
                      Something else here
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>
              The starting state of the menu will appear collapsed on smaller
              screens, and will appear non-collapsed on larger screens. When
              toggled using the button below, the menu will change.
            </p>
            <p>
              Make sure to keep all page content within the{" "}
              <code>#page-content-wrapper</code>. The top navbar is optional,
              and just for demonstration. Just create an element with the{" "}
              <code>#menu-toggle</code> ID which will toggle the menu when
              clicked.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
