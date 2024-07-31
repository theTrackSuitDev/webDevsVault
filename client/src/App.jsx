import { useState } from "react";
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
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Details from "./components/details/Details";
import NotFound from "./components/not-found/NotFound";
import { AuthContext } from "./contexts/AuthContext";

function App() {
    const [authState, setAuthState] = useState({});

    const modifyAuthState = (newState) => {
        setAuthState(newState);
    }

    const authData = {
        email: authState.email,
        username: authState.username,
        userId: authState.userId,
        isLogged: !!authState.userId,
        modifyAuthState
    }

    return (
        <>
            <AuthContext.Provider value={authData}> 
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
                            <Route path="/login" element={<Login />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/details/*" element={<Details />}/>
                            <Route path="/not-found" element={<NotFound />}/>
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default App;
