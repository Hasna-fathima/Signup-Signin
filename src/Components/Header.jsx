import React from 'react';
import {Link} from 'react-router-dom';
import '/src/index.css'



function Header() {
  return (
    <div className="container">
  <header>
    <div className="container d-flex justify-content-between align-items-center p-3">
      <img className="logo" src="src/Components/logo.svg" alt="logo" />
      <nav className="link">
        <ul className="d-flex list-unstyled gap-4">
          <li>
            <Link className="link text-decoration-none fs-5" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="link text-decoration-none fs-5" href="#">
              New
            </Link>
          </li>
          <li>
            <Link className="link text-decoration-none fs-5" href="#">
              Popular
            </Link>
          </li>
          <li>
            <Link className="link text-decoration-none fs-5" href='/src/Components/Trending.jsx'>
              Treding
            </Link>
          </li>
          <li>
            <Link className="link text-decoration-none fs-5" href="#">
              Categories
            </Link>
          </li>
          <li>
            <Link className="link text-decoration-none fs-5" href="/signup.jsx">
              signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</div>

  )}
        
  

export default Header