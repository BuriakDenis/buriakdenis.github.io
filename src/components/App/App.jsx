import React from "react";
import Header from "../Header/Header";
import "../App/App.scss"
import Introduce from "../Section/Introduce/Introduce";
import About from "../Section/About/About";
import Jobs from "../Section/Jobs/Jobs";
import Skills from "../Section/Skills/Skills";
import Contacts from "../Section/Contacts/Contacts";
import Footer from "../Footer/Footer";



const App = () => {
    return (
                <div className="wrapper">
                <Header />
                <div className="page">
                    <Introduce />
                    <About />
                    <Jobs />
                    <Skills />
                    <Contacts />
                </div>
                <Footer />
                </div>
    )
}
export default App;