import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminLocations.css";

function AdminLocations() {

const [streams,setStreams] = useState([]);
const [colleges,setColleges] = useState([]);
const [filteredColleges,setFilteredColleges] = useState([]);

const [stream,setStream] = useState("");
const [state,setState] = useState("");

const [top,setTop] = useState([]);
const [popular,setPopular] = useState([]);

useEffect(()=>{

fetchStreams();
fetchColleges();

},[]);


const fetchStreams = async()=>{

try{

const res = await axios.get("https://collegechale.onrender.com/api/streams");

setStreams(res.data);

}catch(err){
console.log(err);
}

};


const fetchColleges = async()=>{

try{

const res = await axios.get("https://collegechale.onrender.com/api/colleges");

setColleges(res.data);
setFilteredColleges(res.data);

}catch(err){
console.log(err);
}

};


const handleStreamChange = async(e)=>{

const value = e.target.value;

setStream(value);

try{

const res = await axios.get(
`https://collegechale.onrender.com/api/colleges/stream/${value}`
);

setFilteredColleges(res.data);

}catch(err){

console.log(err);

}

};


const handleSubmit = async()=>{

try{

await axios.post("https://collegechale.onrender.com/api/megamenu/add",{

stream,
state,
topColleges:top,
popularColleges:popular

});

alert("Location Menu Saved");

}catch(err){

console.log(err);

alert("Error saving menu");

}

};


return(

<div className="locations-page">

<h2 className="locations-title">Locations Mega Menu</h2>

<div className="locations-card">

<div className="form-row">
<label>Select Stream</label>

<select onChange={handleStreamChange} value={stream}>

<option value="">Select Stream</option>

{streams.map((s)=>(
<option key={s._id} value={s.name}>
{s.name}
</option>
))}

</select>
</div>


<div className="form-row">
<label>State</label>

<input
placeholder="Enter State"
value={state}
onChange={(e)=>setState(e.target.value)}
/>
</div>


<h3 className="section-title">Top Colleges</h3>

<div className="college-list">

{filteredColleges.map(c=>(

<div key={c._id} className="college-item">

<input
type="checkbox"
checked={top.includes(c._id)}
onChange={(e)=>{

if(e.target.checked){
setTop([...top,c._id]);
}else{
setTop(top.filter(id=>id!==c._id));
}

}}
/>

{c.name}

</div>

))}

</div>


<h3 className="section-title">Popular Colleges</h3>

<div className="college-list">

{filteredColleges.map(c=>(

<div key={c._id} className="college-item">

<input
type="checkbox"
checked={popular.includes(c._id)}
onChange={(e)=>{

if(e.target.checked){
setPopular([...popular,c._id]);
}else{
setPopular(popular.filter(id=>id!==c._id));
}

}}
/>

{c.name}

</div>

))}

</div>


<button className="save-btn" onClick={handleSubmit}>
Save Location Menu
</button>

</div>

</div>

);

}

export default AdminLocations;