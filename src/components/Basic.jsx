import React, { useEffect, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import maktab from "../images/maktab.jpg";
import { FaAngleDown } from "react-icons/fa6";

const Basic = () => {
  const [classCount, setClassCount] = useState(0);
  const [schoolCount, setSchoolCount] = useState(0);
  const [showModal, setShowModal] = useState(false); // Modalni ko'rsatish uchun holat

  useEffect(() => {
    let classTimer, schoolTimer;

    classTimer = setInterval(() => {
      if (classCount < 50) {
        setClassCount((prevCount) => prevCount + 1);
      }
    }, 10);

    schoolTimer = setInterval(() => {
      if (schoolCount < 50) {
        setSchoolCount((prevCount) => prevCount + 1);
      } else if (schoolCount >= 50) {
        setSchoolCount(1000); // Change to '3000+' after reaching 300
      }
    }, 10);

    return () => {
      clearInterval(classTimer);
      clearInterval(schoolTimer);
    };
  }, [classCount, schoolCount]);

  // Modalni ochish funksiyasi
  const openModal = () => {
    setShowModal(true);
  };

  // Modalni yopish funksiyasi
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-white border-b-white border-b h-auto">
      <div className="max-w-[1240px] mx-auto px-4 py-10 md:flex md:items-center md:justify-between">
        {/* Left side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-5xl text-start sm:text-6xl lg:text-8xl font-bold">
            9V Class.
          </h1>
          <p className="text-purple-600 pt-4 sm:pt-6 font-medium text-start text-lg sm:text-xl lg:text-2xl">
            Created By Akmal Pardayev
          </p>
          <div className="pt-6 sm:pt-10">
            <a
              onClick={openModal} // Modalni ochish
              className="bg-[#6a0dad] w-[190px] text-white font-bold py-2 px-4 justify-center rounded-lg flex items-center gap-2 hover:bg-[#5a009a] transition duration-300 sm:justify-center cursor-pointer"
            >
              Let's see the information <HiChevronRight size={30} />
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          className="relative bg-cover bg-center flex flex-col h-[300px] sm:h-[350px] md:h-[400px] lg:h-[430px] w-full sm:w-[90%] md:w-[75%] lg:w-[800px] mx-auto mt-10 md:mt-0 md:ml-10 rounded-lg opacity-80 text-white"
          style={{ backgroundImage: `url(${maktab})` }}
        >
          {/* Overlay content on top of the image */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-shadow-lg px-4">
            <div className="mb-6">
              <h3 className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text opacity-100 text-xl sm:text-2xl lg:text-3xl font-bold">
                Classes in School:
              </h3>
              <p className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-lg sm:text-xl lg:text-2xl bg-clip-text font-medium">
                {classCount === 50 ? '50+' : classCount}
              </p>
            </div>
            <div>
              <h3 className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text opacity-100 text-xl sm:text-2xl lg:text-3xl font-bold">
                Students in our School:
              </h3>
              <p className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-lg sm:text-xl lg:text-2xl bg-clip-text font-medium">
                {schoolCount === 3000 ? '3000+' : schoolCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white text-black p-8 rounded-lg w-[90%] sm:w-[500px] md:w-[600px]">
            <h2 className='font-bold text-2xl'>Informations</h2>
            <h3 className='font-medium text-[#00df9a]'>Our school was built in 1980.</h3>
            <p className='font-medium text-[#00df9a]'>Our classes start at 8:00</p>
            <p className='font-medium text-[#00df9a]'>This school can accommodate more than 300 students</p>
            <p className='font-medium text-[#00df9a]'>It has more than 50 classes</p>
            <p className='font-medium text-[#00df9a]'>There are enough experienced teachers teaching here.</p>
            <p className='font-medium text-[#00df9a]'>and in a word, Our school is not big but despite this we feel comfortable and have fun studying here.</p>
            <h6 className='text-red-700 flex'>You will find the pictures at the bottom <FaAngleDown style={{marginTop: '5px'}}/></h6>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basic;
