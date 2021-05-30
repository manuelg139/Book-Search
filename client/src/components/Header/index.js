import React from "react";


function Header() {
    return (
        <div className="jumbotron text-center" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", marginBottom:"2rem", backgroundImage: `url("https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg")`, backgroundBlendMode:"hard-light"}}>
            <div className="container text-dark">
                <h1>Google Books Search</h1>
                <h2>Find and Create Your Own Booklist</h2>
            </div>
        </div>
    );
}

export default Header;