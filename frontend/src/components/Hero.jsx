import React, { useEffect, useState } from 'react';
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const headings = [
    'Discover Your Winter Style ☃️',
    'Premium Wear 👑',
    'Year-End Sale 🏷️',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = headings[currentHeadingIndex];
    let typingTimeout;

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting characters
        setDisplayedText((prev) => prev.slice(0, -1));

        if (displayedText === '') {
          // Fully deleted, switch to next sentence
          setIsDeleting(false);
          setCurrentHeadingIndex((prev) => (prev + 1) % headings.length);
          setTypingSpeed(300); // Pause before typing next sentence
        }
      } else {
        // Typing characters
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));

        if (displayedText === fullText) {
          // Fully typed, pause before deleting
          typingTimeout = setTimeout(() => {
            setIsDeleting(true);
          }, 4000);
          return; // Exit to wait for the timeout
        }
      }

      // Adjust speed for natural typing/deleting
      setTypingSpeed(isDeleting ? 100 : 100);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, headings, currentHeadingIndex, typingSpeed]);

  return (
    <section className="relative h-screen w-full bg-hero overflow-y-hidden bg-no-repeat p-4 md:p-10 scrollbar-hide ">
      {/* Decorative Background Circles */}
      <div className="absolute w-[500px] h-[500px] bg-blue-200 rounded-full top-[-150px] left-[-150px] opacity-20 blur-3xl"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-200 rounded-full bottom-[-100px] right-[-100px] opacity-20 blur-3xl"></div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full px-8 lg:px-16">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
            Stay warm and stylish with our exclusive winter collection. Find
            outfits that make you feel confident and cozy, no matter the weather.
          </p>
          <div className="flex flex-row items-center gap-x-4 my-10">
            <div className="flex flex-row">
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
            </div>
            <div className="font-bold sm:font-bold">
              176k<span className="font-normal sm:font-normal"> Excellent Reviews</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <NavLink
              to="/shop"
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Shop Now
            </NavLink>
            <NavLink
              to="/offers"
              className="flex items-center px-8 py-3 text-blue-600 border border-blue-500 rounded-full hover:bg-blue-100 hover:shadow-lg transform transition duration-300"
            >
              <MdOutlineLocalOffer className="mr-2 text-xl" />
              Offers
            </NavLink>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center items-center mt-20 md:mt-0">
          {/* Image with Motion */}
          <img
            src="https://img.freepik.com/free-psd/fashion-shopping-background_23-2150752492.jpg?uid=R180098608&ga=GA1.1.1073321470.1734768585&semt=ais_hybrid"
            alt="Winter Collection"
            className="animate-floating transition duration-700 rounded-[20px] mt-10 md:rounded-[40px] shadow-lg shadow-blue-400 w-60 h-60 md:w-[550px] md:h-[400px] object-cover"
          />

          {/* Circular Badge */}
          <div className=" animate-floating transition duration-700 absolute top-[-10px] left-[-10px] w-16 h-16 md:w-28 md:h-28 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
            2024
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
