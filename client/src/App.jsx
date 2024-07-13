import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return (
        <>
            <div className="content">
                <Header />

                <main>

                <Home />

                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
