import { Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
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
import LoggedPagesGuard from "./guards/LoggedPagesGuard";
import GuestPagesGuard from "./guards/GuestPagesGuard";
import Notification from "./components/notification/Notification";
import InvalidSessionInterceptor from "./interceptors/InvalidSessionInterceptor";

function App() {

    return (
        <>
            <AuthContextProvider> 
                <InvalidSessionInterceptor />
                <div className="content">
                    <Notification />
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/vault" element={<Catalog />}/>
                            <Route path="/details/:resourceId" element={<Details />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/not-found" element={<NotFound />}/>
                            <Route path="*" element={<NotFound />}/>

                            <Route element={<GuestPagesGuard />}>
                                <Route path="/login" element={<Login />}/>
                                <Route path="/register" element={<Register />}/>
                            </Route>

                            <Route element={<LoggedPagesGuard />}>
                                <Route path="/add-resource" element={<AddResource />}/>
                                <Route path="/edit/:resourceId" element={<EditResource />}/>
                                <Route path="/my-profile" element={<Profile />}/>
                                <Route path="/logout" element={<Logout />}/>
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthContextProvider>
        </>
    );
}

export default App;
