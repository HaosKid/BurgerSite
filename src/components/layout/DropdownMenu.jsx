// Import required libraries and components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  // State to store navigation links
  const [navLinks, setNavLinks] = useState([]);

  // Populate navLinks state on component mount
  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" }
    ];
    setNavLinks(navs);
  }, []);

  return (

    <div>
      {
      // Navbar container
      }
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {
            // Brand logo or name (currently empty)
          }
          
          <a className="navbar-brand" href="#"></a>
          {
            // Dropdown button for the menu
          }
          
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            {
              // Dropdown menu items populated from navLinks
            }
            
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Export the DropdownMenu component
export default DropdownMenu;
