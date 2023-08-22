import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

/**
 * Tutorial
 * @link https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
 */

export default function Main() {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="content">
          <Routes>
            <Route exact strict path="/" element={<Home />} />
            <Route exact strict path="/stuff" element={<Stuff />} />
            <Route exact strict path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
