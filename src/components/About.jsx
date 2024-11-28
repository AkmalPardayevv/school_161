import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const students = [
  {
    name: "Akmal Pardayev",
    dob: "2009-09-10",
    image: "https://cdn.icon-icons.com/icons2/1916/PNG/512/person_121780.png",
    social: {
      telegram: "https://t.me/akmalpardayev1",
      instagram: "https://instagram.com/akmalpardayev_/",
    },
  },
  {
    name: "Ulug'bekov Sardor",
    dob: "2009-12-20",
    image: "https://cdn.icon-icons.com/icons2/1916/PNG/512/person_121780.png",
    social: {
      telegram: "https://t.me/sardor_zz09",
      instagram: "https://www.instagram.com/zafarovich__s/",
    },
  },
  {
    name: "Rasuljonov Abbosiddin",
    dob: "2010-05-23",
    image: "https://cdn.icon-icons.com/icons2/1916/PNG/512/person_121780.png",
    social: {
      telegram: "https://t.me/rich_uzs",
      instagram: "https://www.instagram.com/new_ghost_2105/",
    },
  },
  {
    name: "Grebenyuk Daniel",
    dob: "2009-10-08",
    image: "https://cdn.icon-icons.com/icons2/1916/PNG/512/person_121780.png",
    social: {
      telegram: "https://t.me/seele_4",
      instagram: "https://www.instagram.com/__amerikano_2/",
    },
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-3xl font-bold text-purple-500">Creators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            {/* Dumaloq shakldagi rasm */}
            <img
              src={student.image}
              alt={student.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-600">{student.name}</h3>
            <p className="text-gray-600">Was Born: {student.dob}</p>

            {/* Ijtimoiy tarmoq ikonalarini qo'shish */}
            <div className="flex gap-4 mt-4">
              {student.social.telegram && (
                <a
                  href={student.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTelegram size={24} />
                </a>
              )}
              {student.social.instagram && (
                <a
                  href={student.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
