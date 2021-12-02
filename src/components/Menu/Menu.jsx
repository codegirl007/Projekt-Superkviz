import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
        >
          Úvod
        </NavLink>
        <NavLink
          to="/quizzes"
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
        >
          Kvízy
        </NavLink>
        <NavLink
          to="/rating"
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
        >
          Žebříček
        </NavLink>
      </nav>
    </>
  );
};
