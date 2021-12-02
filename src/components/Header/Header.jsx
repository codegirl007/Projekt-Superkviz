import React from "react";
import { Menu } from "../Menu/Menu";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Superkvíz</h1>

        <Menu />
      </header>
    </>
  );
};
