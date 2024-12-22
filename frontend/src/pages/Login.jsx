import React from 'react';

const Login = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 mt-10">
      {/* Image Section - Hidden on Small Devices */}
      <div className="hidden md:block md:w-1/2">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/027/205/841/small_2x/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-3d-illustration-png.png" 
          alt="Login Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full md:w-1/2 shadow-purple-300">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create an Account</h3>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <div className="flex items-center space-x-2 mt-2">
            <input type="checkbox" id="terms" className="h-4 w-4" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By continuing, I agree to the <a href="#" className="text-blue-500 underline">terms of use</a> & <a href="#" className="text-blue-500 underline">privacy policy</a>.
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Continue
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-blue-500 font-medium">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
