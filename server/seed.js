const mongoose = require("mongoose");
require("dotenv").config();

const College = require("./models/College");

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const colleges = [
{
name: "Dr Ram Manohar Lohia Avadh University",
location: "Uttar Pradesh",
stream: "Engineering",
description: "The government of Uttar Pradesh established Avadh University, Ayodhya.",
courses: ["B.Tech","MBA","BCA","B.Sc"],
facilities: ["Library","Hostel","Sports Complex","Labs"],
image: "ramLogo.png",
images: ["Ram1.png","Ram2.jpg","Ram3.jpg","Ram4.jpg"]
},
{
name: "Sri Chandrasekharendra Saraswati Vishva Mahavidyalaya",
location: "Tamil Nadu",
stream: "Management",
description: "The Viswa Mahavidyalaya at Kanchi was established with blessings.",
courses: ["MBA","BBA","B.Com","MCA"],
facilities: ["Hostel","Library","WiFi Campus","Auditorium"],
image: "scsLogo.png",
images: ["Sri1.jpg","Sri2.jpg","Sri3.jpg","Sri4.jpg"]
},
{
name: "Chinmaya Vishwavidyapeeth",
location: "Kerala",
stream: "Education",
description: "Chinmaya Vishwavidyapeeth offers multiple UG and PG courses.",
courses: ["BBA","B.Com","BCA","BA"],
facilities: ["Digital Library","Labs","Sports","Cafeteria"],
image: "chinmayaLogo.jpg",
images: ["Chinmaya1.jpg","Chinmaya2.jpg","Chinmaya3.jpg","Chinmaya4.jpg"]
},
{
name: "Indus University",
location: "Gujarat",
stream: "Engineering",
description: "Indus University offers undergraduate and postgraduate programs.",
courses: ["B.Tech","MBA","BCA","B.Sc"],
facilities: ["Hostel","Gym","Labs","Library"],
image: "indusLogo.png",
images: ["Indus1.jpg","Indus2.jpg","Indus3.jpg","Indus4.jpg"]
}
];


const seedDB = async () => {

await College.deleteMany({});

await College.insertMany(colleges);

console.log("Data Seeded Successfully");

mongoose.connection.close();

};

seedDB();