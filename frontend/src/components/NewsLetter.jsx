import React from 'react';

const NewsLetter = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6 sm:px-12 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold text-white mb-4">
          Get Exclusive Offers On Your Email
        </h3>
        <h4 className="text-lg text-gray-200 mb-8">
          Subscribe to our newsletter and stay updated
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center w-full sm:w-2/3 bg-white rounded-full overflow-hidden px-4">
            <img
              className="w-6 h-6 mr-2"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              alt="Email Icon"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-3 focus:ring-4 focus:ring-white"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
