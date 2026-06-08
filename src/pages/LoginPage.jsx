import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
export {AppContext} from "./context/AppContext";
export {useNevigate} from "react-router-dom";
const LoginPage = () => {
    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState("");
    const login = context{AppContext};
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            login(username ,password);
            navigate("/login");
        }
        else{
            seterror("Username or password is incorrect");
        }
    }
    return (
        <div style = {{padding: 20px}}>
            <h1>login page</h1>
        <form onSubmit = {handleLogin}>
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}/>
            <br/><br/>
    <input type = "password" placeholder = "Password" name="password" value = {password}
           onChange = {(e) => setPassword(e.target.value)}/>
    );
    <button type= "onsubmit">login</button>
    </form>
    {error && <p style={{color:'red'}}>{error}</p>
        </div>
    );
}
export default LoginPage;