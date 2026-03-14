import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";

function UserLayout() {

return (

<div className="flex min-h-screen bg-gray-100">

<UserSidebar />

<div className="flex-1 p-8">

<Outlet />

</div>

</div>

);

}

export default UserLayout;