import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg text-light">
            <div className="container" style={{textAlign: "center", marginBottom:"2rem", margin:"auto", }}>
               
              
                <Link className="navbar-brand" to="/">HOME</Link>
                
                        <Link className="navbar-brand" 
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > SEARCH</Link>
                   
                        <Link className="navbar-brand" 
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >FAVORITES</Link>
                
            </div>
        </nav>

    );
}

export default Navbar;