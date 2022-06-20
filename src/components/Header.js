import logo from "../images/logo.svg";

export default function Header() {
    return (
        <header>
            <img className="logo-icon" src={logo} alt="website's logo" />
            <h1 className="website-title">my travel journal</h1>
        </header>
    )
}