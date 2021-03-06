import React from "react";
import "./Layout.scss";
import Wrapper from "../Wrapper/wrapper";

const Layout = props => {

  return (
    <Wrapper>
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Dashboard
            </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Shortcuts
            </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Overview
            </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Events
            </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Profile
            </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Status
            </a>
        </div>
        <div>
          <button className="btn btn-primary" id="menu-toggle">
            Toggle Menu
            </button>
        </div>
      </div>
      <div id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                  </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                  </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Action
                    </a>
                  <a className="dropdown-item" href="#">
                    Another action
                    </a>
                  <div class="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                    </a>
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
    </Wrapper>
  )
}

export default Layout;
