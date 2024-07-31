import { useEffect, useState } from "react";
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
import Logout from "./components/logout/Logout";
import Details from "./components/details/Details";
import NotFound from "./components/not-found/NotFound";
import { AuthContext } from "./contexts/AuthContext";
import { getProfile } from "./services/userService";

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

    useEffect(() => {
        async function sessionCheck() {
            try {
                const response = await getProfile();
                const newAuthState = {
                    email: response.data.email,
                    username: response.data.username,
                    userId: response.data._id
                }
    
                modifyAuthState(newAuthState);
            } catch (error) {
                modifyAuthState({});
                console.log("Session checked: Expired or missing!");
            }
        }

        sessionCheck();

    }, []);

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
                            <Route path="/edit/:resourceId" element={<EditResource />}/>
                            <Route path="/profile/:userId" element={<Profile />}/>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/logout" element={<Logout />}/>
                            <Route path="/details/:resourceId" element={<Details />}/>
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
