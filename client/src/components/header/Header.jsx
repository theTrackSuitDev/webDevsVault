import logo from "../../assets/images/light-bulb-gear-13626.png"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a href="">
                    <img src={logo} alt="Bulb-logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li id="nav-home">
                        <a href="#" className="nav-active">
                            Home
                        </a>
                    </li>
                    <li id="nav-vault">
                        <a href="#">Vault</a>
                    </li>
                    <li id="nav-add">
                        <a href="#">Add Resource</a>
                    </li>
                    <li id="nav-profile">
                        <a href="#">Profile</a>
                    </li>
                    <li id="nav-login">
                        <a href="#">Login</a>
                    </li>
                    <li id="nav-register">
                        <a href="#">Register</a>
                    </li>
                    <li id="nav-about">
                        <a href="#">About</a>
                    </li>
                    <li id="nav-logout">
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
