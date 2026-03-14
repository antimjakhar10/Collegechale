import { useState } from "react";

const courseList = [
  "MOT", "MSW", "Certification", "CHM", "BFA",
  "B.Com (Research)", "Automation Robotics", "B.Sc", "B.Sc (Hons.)",
  "BPT", "B.Com+LL.B{Hons.}", "B.Sc+M.Sc",
  "B.Pharm (Lateral Entry)", "BID", "B.El.Ed.", "PGDBA",
  "B.Com(Hons)", "BSW", "B.Tech", "BPMT",
  "MCA", "BALLB{Hons.}", "BMS", "M.Sc",
  "B.Stat {Hons.}", "BCA{Hons.}", "BHMS",
  "B.Stat", "Diploma (Lateral Entry)", "BPA",
  "M.Pharma", "MPH", "BSc (IT)", "B.Ed",
  "M.Sc+Ph.D", "EEE", "MBA (IB)", "MSc Agronomy",
  "MTTM", "BOT"
];

const TopCourses = ({ onCourseSelect }) => {

  const [activeCourse, setActiveCourse] = useState("B.Com+LL.B{Hons.}");

  const handleClick = (course) => {
    setActiveCourse(course);

    if (onCourseSelect) {
      onCourseSelect(course);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto text-center px-4 md:px-6">

        {/* TITLE */}

        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
          Top Courses Available
        </h2>

        <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-lg">
          We offer the Best Courses With Best Universities & Colleges
        </p>


        {/* COURSES */}

        <div className="flex flex-wrap justify-center gap-2 md:gap-4">

          {courseList.map((course, index) => (

            <button
              key={index}
              onClick={() => handleClick(course)}

              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full border text-xs md:text-base transition-all duration-300 whitespace-nowrap
              
              ${
                activeCourse === course
                  ? "bg-blue-900 text-white border-blue-900"
                  : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              }
              
              `}
            >
              {course}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TopCourses;