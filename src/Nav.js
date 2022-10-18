import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return 
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://res.cloudinary.com/dltxupvq4/image/upload/v1632993826/netflix_logo_m2kje4.png"
        alt="netflix logo"
      />

      <img
        className="nav-avatar"
        src="https://res.cloudinary.com/dltxupvq4/image/upload/v1632994067/netflix_avatar_nmmhgz.png"
        alt="nav avatar"
      />
    </div>
  );
}

export default Nav;
