import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import AddResource from "./components/add-edit-resource/AddResource";
import Profile from "./components/profile/Profile";
import EditResource from "./components/add-edit-resource/EditResource";

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
                        <Route path="/add-resource" element={<AddResource />}/>
                        <Route path="/edit/*" element={<EditResource />}/>
                        <Route path="/profiles/*" element={<Profile />}/>
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
