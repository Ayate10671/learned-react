import React from "react";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>4opping </h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/src/pages/home.js">
              Home
            </a>
           
          </li>
          <li className="main-list">
            <a className="main-link" href="/src/pages/prodects.js">
              Prodects
            </a>
            
          </li>
          <li className="main-list">
            <a className="main-link" href="/src/pages/prodect.js">
              Prodect
            </a>
            
          </li>
          <li className="main-list">
            <a className="main-link" href="/src/pages/addProdects.js">
              Add Prodect
            </a>
            
          </li>
        </ul>
      </header>

      
    </div>
  );
};

export default Header;