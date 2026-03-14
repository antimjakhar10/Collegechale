import ChinmayaLogo from "../assets/universities/Chinmaya.jpg";
import indusLogo from "../assets/universities/indus_university_logo.png";
import ramLogo from "../assets/universities/Ram Manohar.webp";
import SCSlogo from "../assets/universities/SCSVMV.jpg";
import Ram1 from "../assets/universities/Ram1.png"
import Ram2 from "../assets/universities/Ram2.jpg"
import Ram3 from "../assets/universities/Ram3.jpg"
import Ram4 from "../assets/universities/Ram4.jpg"
import Indus1 from "../assets/universities/Indus1.jpg"
import Indus2 from "../assets/universities/Indus2.webp"
import Indus3 from "../assets/universities/Indus3.jpg"
import Indus4 from "../assets/universities/Indus4.jpg"
import Sri1 from "../assets/universities/Sri1.jpg"
import Sri2 from "../assets/universities/Sri2.jpg"
import Sri3 from "../assets/universities/Sri3.webp"
import Sri4 from "../assets/universities/Sri4.jpg"
import Chinmaya1 from "../assets/universities/Chinmaya1.gif"
import Chinmaya2 from "../assets/universities/Chinmaya2.jpg"
import Chinmaya3 from "../assets/universities/Chinmaya3.webp"
import Chinmaya4 from "../assets/universities/Chinmaya4.webp"

export const colleges = [
  {
    id: 1,
    name: "Dr Ram Manohar Lohia Avadh University",
    location: "Uttar Pradesh",
    stream: "Engineering",
    description:
      "The government of Uttar Pradesh established Avadh University, Ayodhya.",
    courses: ["B.Tech", "MBA", "BCA", "B.Sc"],
    facilities: ["Library", "Hostel", "Sports Complex", "Labs"],
    images: [Ram1, Ram2, Ram3, Ram4],
    image: ramLogo
  },
  {
    id: 2,
    name: "Sri Chandrasekharendra Saraswati Vishva Mahavidyalaya",
    location: "Tamil Nadu",
    stream: "Management",
    description:
      "The Viswa Mahavidyalaya at Kanchi was established with blessings.",
    courses: ["MBA", "BBA", "B.Com", "MCA"],
    facilities: ["Hostel", "Library", "WiFi Campus", "Auditorium"],
    images: [Sri1, Sri2, Sri3, Sri4],
    image: SCSlogo
  },
  {
    id: 3,
    name: "Chinmaya Vishwavidyapeeth",
    location: "Kerala",
    stream: "Education",
    description:
      "Chinmaya Vishwavidyapeeth offers multiple UG and PG courses.",
    courses: ["BBA", "B.Com", "BCA", "BA"],
    facilities: ["Digital Library", "Labs", "Sports", "Cafeteria"],
    images: [Chinmaya1, Chinmaya2, Chinmaya3, Chinmaya4],
    image: ChinmayaLogo
  },
  {
    id: 4,
    name: "Indus University",
    location: "Gujarat",
    stream: "Engineering",
    description:
      "Indus University offers undergraduate and postgraduate programs.",
    courses: ["B.Tech", "MBA", "BCA", "B.Sc"],
    facilities: ["Hostel", "Gym", "Labs", "Library"],
    images: [Indus1, Indus2, Indus3, Indus4],
    image: indusLogo
  },
];