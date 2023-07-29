import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const ContactMe = ({ darkMode }) => {
  return (
    <div className={`w-full md:w-full p-6 ${darkMode ? 'text-white' : 'text-black'}`}>
      <h4 className="text-xl font-bold">Contact </h4>
      <hr className="my-4" />
      <div className="mt-4">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-2xl mr-3" />
          <p className="text-lg">Address : Mandla</p>
        </div>
        <hr className="my-3" />
        <div className="flex items-center">
          <FaPhone className="text-2xl mr-3" />
          <p className="text-lg">Contact : 8319277619</p>
        </div>
        <hr className="my-3" />
        <div className="flex items-center">
          <FaEnvelope className="text-2xl mr-3" />
          <p className="text-lg">Email : mr.ankitdehariya000@gmail.com</p>
        </div>
        <hr className="my-3" />
        <div className="flex items-center">
          <FaGlobe className="text-2xl mr-3" />
          <p className="text-lg">Website : www.contact.com</p>
        </div>
        <hr className="my-3" />
      </div>
    </div>
  );
};

export default ContactMe;
