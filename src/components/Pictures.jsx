// import React from "react";
// import maktab from "../images/maktab.jpg";

// const Pictures = () => {
//   return (
//     <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
//       <div>
//         <img src={maktab} alt="Maktab rasmi" loading="lazy" />
//       </div>
//       <div className="col-start-3">
//         <img src={maktab} alt="Maktab rasmi" loading="lazy" />
//       </div>
//       <div>
//         <img src={maktab} alt="Maktab rasmi" loading="lazy" />
//       </div>
//       <div>
//         <img src={maktab} alt="Maktab rasmi" loading="lazy" />
//       </div>
//       <div className="row-start-1 col-start-2 col-span-2">
//         <img src={maktab} alt="Maktab rasmi" loading="lazy" />
//       </div>
//     </div>
//   );
// };

// export default Pictures;

import React from "react";
import maktab1 from "../images/maktab.jpg";
import maktab2 from "../images/view.jpg";
import maktab3 from "../images/first floor.jpg";
import maktab4 from "../images/stadion.jpg";
import maktab5 from "../images/class.png";
import maktab6 from "../images/stairs.jpg";

const Pictures = () => {
  const data = [
    { image: maktab1, title: "Entry", info: "Beautiful arched entrance door" },
    { image: maktab2, title: "Courtyard", info: "A courtyard that can accommodate almost all students" },
    { image: maktab3, title: "First floor", info: "The place you see when you enter the school" },
    { image: maktab4, title: "Pitch", info: "The best football pitch for playing football" },
    { image: maktab5, title: "Classes", info: "All the classrooms are similarly spacious and beautiful." },
    { image: maktab6, title: "Stairs", info: "They will help you climb the floors" },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg shadow-md"
        >
          {/* Rasm */}
          <img
            src={item.image}
            alt={`Maktab rasmi ${index + 1}`}
            className="w-full md:w-1/3 rounded-lg"
            loading="lazy"
          />
          {/* Matn qismi */}
          <div className="flex text-start flex-col items-start gap-2 md:w-2/3">
            <h3 className="text-2xl font-bold text-purple-500">{item.title}</h3>
            <p className="text-transparent bg-gradient-to-r underline underline-offset-1 from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
              {item.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Pictures;