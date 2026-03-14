import { useEffect, useState } from "react";

function UserEnquiries() {

const [enquiries,setEnquiries] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

const user = JSON.parse(localStorage.getItem("user"));

if(!user){
setLoading(false);
return;
}

const userId = user.id || user._id;

fetch(`https://collegechale.onrender.com/api/enquiries/user/${userId}`)
.then(res => res.json())
.then(data=>{
console.log("Enquiries:",data);
setEnquiries(data);
setLoading(false);
})
.catch(err=>{
console.log(err);
setLoading(false);
});

},[]);

if(loading){
return <p>Loading...</p>;
}

return(

<div>

<h2 className="text-2xl font-bold mb-6">
My Enquiries
</h2>

{enquiries.length === 0 ? (
<p>No enquiries found</p>
) : (

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{enquiries.map(e => (

<div
key={e._id}
className="bg-white shadow rounded-xl p-5 border hover:shadow-lg transition"
>

<h3 className="text-lg font-semibold text-gray-800">
{e.college}
</h3>

<p className="text-gray-600 mt-1">
Course : {e.course}
</p>

<p className="text-sm text-gray-400 mt-2">
{new Date(e.createdAt).toLocaleDateString()}
</p>

<span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
Application Submitted
</span>

</div>

))}

</div>

)}

</div>

);

}

export default UserEnquiries;