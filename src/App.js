import React from "react";
import { ReactDOM } from "react";
import About from "./components/About";
import Header from "./components/Header"
import Home from "./components/Home";
import Contact from "./components/Contact"

function App(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Home/>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
}

export default App