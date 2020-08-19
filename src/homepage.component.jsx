import React from "react";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <spawn className="subtitle">Shop Now</spawn>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <spawn className="subtitle">Shop Now</spawn>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Sneakers</h1>
          <spawn className="subtitle">Shop Now</spawn>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <spawn className="subtitle">Shop Now</spawn>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <spawn className="subtitle">MENS</spawn>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
