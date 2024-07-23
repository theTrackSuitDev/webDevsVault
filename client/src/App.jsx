import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";

function App() {
    return (
        <>
            <div className="content">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/vault" element={<Catalog />}/>
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
