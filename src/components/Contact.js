import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="w-1/2 p-8">
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
      <div className="w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-4 underline">Send us a Message.</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border p-2 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
