import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";

function App() {
  return (
  
      <div>
        <NavBar />
        <Header />
        <Wrapper>
            <Search />
            <Saved />
    
          </Wrapper>
          
      </div>
  );
}

export default App;
