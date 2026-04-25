import { useParams } from "react-router-dom";
import "../css/Loginregister.css";
import { SearchBar } from "../components/Bookcatalog.jsx";
import { checkLogin } from "../services/api.js";
import { useLoggedInContext } from "../contexts/Loggedin.jsx";
import profileIcon from "../assets/profile.svg";
import passwordIcon from "../assets/password.svg";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";


function Login() {
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const { isLoggedIn } = useLoggedInContext();

    const handleLoginAttempt = () => {

    }

    return (
    isLoggedIn() ? (<p>Vec ste prijavljeni</p>) : (
    <>
        <Navbar />
        <h1 className="login-text">Prijava</h1>
        <div className="login">
        <SearchBar search={userName} setSearch={setUsername} icon={profileIcon} placeholder="Korisnicko ime"></SearchBar>
        <SearchBar search={passWord} setSearch={setPassword} icon={passwordIcon} placeholder="Lozinka"></SearchBar>
        <button onClick={handleLoginAttempt}>Prijavite se</button>
        </div>
    </>));
}

function Register() {
    return (<>
    
    </>
    );
}


function LoginRegister() {
    const { type } = useParams();

    return (<>
        {(type === "login") ? <Login /> : <Register />}
        </>
    );
}

export default LoginRegister;