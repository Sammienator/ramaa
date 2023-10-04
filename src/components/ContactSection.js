import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  return (

<>

<h1 className='text-4xl text-center font bold underline mt-12'>  CONTACT US </h1>
 <div className="container mx-auto flex flex-col md:flex-row  py-10">
      
      {/* Contact Icons */}
      <div className="flex flex-col items-center mb-6 md:mr-6">
      
      <div className="p-8">
         
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          Feel free to reach out to us for any inquiries or assistance. We are
          here to help!
        </p>

        <h1 className="flex items-center mb-4">

          <FaEnvelope className="mr-2" />
          <span>cloudgalaxy2023@gmail.com</span>
        </h1>
        <p className="flex items-center">
          <FaPhone className="mr-2" />
          <span>+254 707 034619</span>
        </p>
      </div>
      </div>

      {/* Contact Form */}
      <div className="mt-6 md:ml-6 md:w-1/2">
        <h2 className="text-2xl text-center mb-4">Feel free to send us a message.</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#191970] hover:bg-gold-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>


</>



   
  );
};

export default ContactSection;
