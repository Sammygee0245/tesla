import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  let [shownav, setShownav] = useState(false);

  function toggle() {
    setShownav(!shownav);
  }

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src="pics\tesla-logo-png-20.png"
            className="logo"
            alt="Tesla logo"
          />
        </Link>

        <ul className="ul1">
          <li className="list1">
            <Link to="mods" className="link1">
              Model S
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="mod3">
              Model 3
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="modx">
              Model X
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="mody">
              Model Y
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="solr">
              Solar Roof
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="solp">
              Solar Pannels
            </Link>
          </li>
          <li className="list1">
            <Link className="link1" to="solp">
              Powerwall
            </Link>
          </li>
        </ul>

        <ul className="acc1">
          <li className="acclist1">
            <Link className="acclink1" to="mods">
              Shop
            </Link>
          </li>
          <li className="acclist1">
            <Link className="acclink1" to="mod3">
              Account
            </Link>
          </li>
          <li className="acc  list1">
            <Link onClick={toggle} className="acclink1">
              Menu
            </Link>
          </li>
        </ul>
      </nav>
      {shownav && (
        <div className="resNav">
          <ul onClick={toggle} className="ul2">
            <li className="list1">
              <Link to="mods" className="link1">
                Model S
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="mod3">
                Model 3
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="modx">
                Model X
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="mody">
                Model Y
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="solr">
                Solar Roof
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="solp">
                Solar Pannels
              </Link>
            </li>
            <li className="list1">
              <Link className="link1" to="solp">
                Powerwall
              </Link>
            </li>
            <li className="acclist1">
              <Link className="acclink1" to="mods">
                Shop
              </Link>
            </li>
            <li className="acclist1">
              <Link className="acclink1" to="mod3">
                Account
              </Link>
            </li>

            <li className="acclist1">
              <Link className="acclink1" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
