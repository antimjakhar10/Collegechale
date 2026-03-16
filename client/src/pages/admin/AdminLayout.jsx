import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {

const navigate = useNavigate();
const [sidebarOpen,setSidebarOpen] = useState(false);

useEffect(()=>{
if(!localStorage.getItem("admin")){
navigate("/admin-login");
}
},[]);

return(

<div className="admin-layout">

<button
className="hamburger"
onClick={()=>setSidebarOpen(!sidebarOpen)}
>
☰
</button>

<div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>

<h2 className="admin-logo">Admin</h2>

<Link to="/admin">Dashboard</Link>
<Link to="/admin/categories">Categories</Link>
<Link to="/admin/add">Add University/College</Link>
<Link to="/admin/colleges">University/College List</Link>
<Link to="/admin/enquiries">Enquiries</Link>
<Link to="/admin/users">Users</Link>
<Link to="/admin/blogs">Blogs</Link>
<Link to="/admin/contacts">
Contact Enquiries
</Link>
<Link to="/admin/locations">Locations</Link>


<div className="sidebar-bottom">
<button
onClick={()=>{
localStorage.removeItem("admin");
navigate("/admin-login");
}}
className="logout-btn"
>
Logout
</button>
</div>

</div>

<div className="admin-content">
<Outlet/>
</div>

</div>

);

}

export default AdminLayout;