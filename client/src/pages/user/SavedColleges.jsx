import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SavedColleges() {

const [colleges, setColleges] = useState([]);
const navigate = useNavigate();

useEffect(() => {

const user = JSON.parse(localStorage.getItem("user"));

if (!user) return;

fetch(`http://localhost:5000/api/saved/user/${user.id}`)
.then(res => res.json())
.then(data => setColleges(data));

}, []);

return (

<div>

<h2 className="text-2xl font-bold mb-6">
Saved Colleges
</h2>

{colleges.length === 0 ? (

<p>No saved colleges</p>

) : (

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{colleges.map(c => {

const imageUrl = c.image?.startsWith("/uploads")
? `http://localhost:5000${c.image}`
: `http://localhost:5000/uploads/${c.image}`;

return (

<div
key={c._id}
className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
>

<div className="w-full h-40 bg-gray-50 flex items-center justify-center border-b">

<img
src={imageUrl}
alt={c.collegeName}
className="max-h-28 object-contain"
/>

</div>

<div className="p-4">

<h3 className="text-lg font-semibold text-blue-900">
{c.collegeName}
</h3>

<p className="text-sm text-gray-500 mt-1">
Saved College
</p>

<div className="flex gap-3 mt-4">

<button
onClick={() =>
navigate(`/college/${c.collegeName.toLowerCase().replace(/\s+/g, "-")}`)
}
className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
>
View College
</button>

<button
className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
>
Remove
</button>

</div>

</div>

</div>

);

})}

</div>

)}

</div>

);

}

export default SavedColleges;