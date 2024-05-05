import React from 'react'
import "./Card.scss";
import { Link } from 'react-router-dom';

export default function Card({ title, text, footerText, path }) {
  return (
    <div className="card">
      <header>
        <Link to={path}>
          <h3 className="card-title">{title}</h3>
        </Link>
      </header>
      <main>
        <p className="card-text">{text}</p>
      </main>
      <hr />
      <footer>
        <p className="card-footer">{footerText}</p>
      </footer>
    </div>
  );
}