import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = (e)=>{
e.preventDefault();

if(email==="admin@gmail.com" && password==="admin123"){

localStorage.setItem("admin","true");
navigate("/admin");

}else{

alert("Invalid email or password");

}

};

return(

<div className="login-wrapper">

<div className="login-box">

<h2>Admin Panel</h2>
<p className="subtitle">College Chale Dashboard</p>

<form onSubmit={handleLogin}>

<label>Email</label>
<input
type="email"
placeholder="Enter admin email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<label>Password</label>
<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>

</form>

</div>

</div>

);

}

export default AdminLogin;