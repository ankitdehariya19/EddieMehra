import React from 'react';
import Button from './Button';
import ContactMe from './ContactMe';
import Input from './Input';
import EmailInput from './Email';
import Textarea from './TextArea';

const Contact = ({ darkMode }) => {
  return (
    <div
      name="contact"
      className={`w-full min-h-screen ${
        darkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-white text-slate-800'
      } py-16`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full sm:py-5">
        <div className="pb-8">
          <p className={`text-4xl font-bold inline ${
            darkMode ? 'border-b-4 border-white' : 'border-b-4 border-gray-500'
          }`}>Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:py-5">
          <div className="w-full h-full">
            <ContactMe darkMode={darkMode} />
          </div>
          <div className="w-full h-full flex justify-center items-center py-2">
            <form action="https://getform.io/f/3b8435ed-8cf4-43d5-a9ca-6672f3414117" method='POST' className="flex flex-col w-full md:w-96 lg:w-112">
              <Input
                type="text"
                required // Add the required attribute
                name="name"
                placeholder="Enter Your Name"
                className={`p-2 bg-transparent border-2 rounded-md w-full ${
                  darkMode ? 'text-white border-white' : 'text-gray-800 border-gray-500'
                } focus:outline-none`}
              />
              <EmailInput
                type="email" // Change the type to "email"
                required // Add the required attribute
                name="email"
                placeholder="Enter Your Email"
                className={`p-2 my-4 bg-transparent border-2 rounded-md w-full ${
                  darkMode ? 'text-white border-white' : 'text-gray-800 border-gray-500'
                } focus:outline-none`}
              />
              <Textarea
                name="message"
                required // Add the required attribute
                rows="10"
                className={`p-2 mb-8 bg-transparent border-2 rounded-md w-full ${
                  darkMode ? 'text-white border-white' : 'text-gray-800 border-gray-500'
                } focus:outline-none`}
              ></Textarea>
              <Button text="let's talk" py="6" darkMode={darkMode} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;










// import React from 'react'

// const Contact = () => {
//     return (
//         <div name="contact" className='w-full h-screen  bg-[#ececec] text-white flex justify-center flex-col '>
//             <div className='w-full h-full flex justify-between items-center'>
//                    <div className='w-full h-full flex flex-col items-center'>
//                    <p className=' mt-60 ml-16 text-4xl text-slate-700 font-bold inline border-b-4 border-gray-500  lg:text-4xl'>Contact</p>
                  
//                    </div>
//                    <div className='w-full h-full'></div>

//             </div>
        
//             <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

//                 <div className='flex justify-center items-center'>
//                     <form action="" className=' mt-96 flex flex-col w-full md:w-1/2  absolute -translate-x-2/4 -translate-y-2/4 shadow-[-10px_-10px_15px_rgba(255,255,255,0.55),10px_10px_15px_rgba(70,70,70,0.12)] px-5 py-10 rounded-[10px] left-2/4 top-2/4;} ' >
//                         <input type='text' name='name' placeholder='Enter Your Name' className=' z-0 bg-transparent shadow-[inset_-10px_-10px_15px_rgba(255,255,255,0.55),inset_10px_10px_15px_rgba(70,70,70,0.12)] w-[90%] mb-[25px] p-2.5 rounded-[7px] border-[none];outline: none focus:right-0 focus: outline-none text-black'></input>
//                         <input type='text' name='email' placeholder='Enter Your Email' className='  z-0 bg-transparent shadow-[inset_-10px_-10px_15px_rgba(255,255,255,0.55),inset_10px_10px_15px_rgba(70,70,70,0.12)] w-[90%] mb-[25px] p-2.5 rounded-[7px] border-[none]; outline: none focus:right-0 focus: outline-none text-black'></input>
//                         <textarea name='message' rows="10" className='  -z-10 bg-transparent shadow-[inset_-10px_-10px_15px_rgba(255,255,255,0.55),inset_10px_10px_15px_rgba(70,70,70,0.12)] w-[90%] mb-[25px] p-2.5 rounded-[7px] border-[none]; outline: none focus:right-0 focus: outline-none text-black'></textarea>
//                         <button className='-z-10 block w-4/5 text-center text-inherit no-underline shadow-[-10px_-10px_15px_rgba(255,255,255,0.55),10px_10px_15px_rgba(70,70,70,0.12)] ml-[10%] p-2.5 rounded-[30px]; font: inherit text-black'> Let's talk</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact