import { useEffect, useState } from "react";

function UserBlogs(){

const [blogs,setBlogs] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

const user = JSON.parse(localStorage.getItem("user"));

if(!user){
setLoading(false);
return;
}

fetch(`http://collegechale.onrender.com/api/blogs/user/${user.id}`)
.then(res=>res.json())
.then(data=>{
setBlogs(data);
setLoading(false);
});

},[]);

if(loading){
return <p className="text-gray-500">Loading...</p>;
}

return(

<div>

<h2 className="text-3xl font-bold mb-8">
My Blogs
</h2>

{blogs.length === 0 ? (

<div className="bg-white p-6 rounded shadow text-gray-500">
No blogs submitted yet
</div>

) : (

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{blogs.map(blog=>(

<div
key={blog._id}
className="bg-white shadow rounded-xl p-5 border hover:shadow-lg transition"
>

<div className="flex justify-between items-start">

<div>

<h3 className="text-xl font-semibold text-gray-800">
{blog.title}
</h3>

<p className="text-sm text-gray-500 mt-1">
Category: {blog.category}
</p>

</div>

{/* STATUS BADGE */}

<div>

{blog.status === "approved" && (
<span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
Approved
</span>
)}

{blog.status === "pending" && (
<span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm">
Pending
</span>
)}

{blog.status === "rejected" && (
<span className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm">
Rejected
</span>
)}

</div>

</div>

<p className="text-gray-600 mt-4 line-clamp-2">
{blog.description}
</p>

<div className="flex justify-between items-center mt-6">

<p className="text-xs text-gray-400">
{new Date(blog.createdAt).toLocaleDateString()}
</p>

<a
href={`/blog/${blog.slug}`}
className="text-blue-600 hover:underline text-sm"
>
View Blog
</a>

</div>

</div>

))}

</div>

)}

</div>

);

}

export default UserBlogs;