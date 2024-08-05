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
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {

    return (
        <>
            <AuthContextProvider> 
                <div className="content">
                    <Header />

                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/vault" element={<Catalog />}/>
                            <Route path="/add-resource" element={<AddResource />}/>
                            <Route path="/edit/:resourceId" element={<EditResource />}/>
                            <Route path="/my-profile" element={<Profile />}/>
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
            </AuthContextProvider>
        </>
    );
}

export default App;
