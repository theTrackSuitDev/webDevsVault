import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Footer() {
    const { username, isLogged } = useContext(AuthContext);
    
    return (
        <footer>
            <div className="icons">
                <a
                    href="https://github.com/theTrackSuitDev/webDevsVault"
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://t.me/+VN2i12PAynpiNDBk" target="_blank">
                    <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="https://www.facebook.com/softuni.bg/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </div>
            <p>This app is created for educational and demo purposes only.</p>
            <p>Хранилище за полезни ресурси</p>
            <p>@ 2024 SoftUni ReactJs.</p>
            <span className="user">
                User: 
                {isLogged
                ? ` ${username}`
                : " Guest"
                } 
            </span>
        </footer>
    );
}
