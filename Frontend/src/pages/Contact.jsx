import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-30">
      

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Reach out to us anytime, and our team will get back to you promptly to help with your queries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <i className="ri-phone-line text-indigo-400 text-2xl"></i>
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="ri-mail-line text-indigo-400 text-2xl"></i>
              <span className="text-gray-300">support@producthub.com</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="ri-map-pin-line text-indigo-400 text-2xl"></i>
              <span className="text-gray-300">Kolkata, India</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="ri-instagram-line text-indigo-400 text-2xl"></i>
              <span className="text-gray-300">@producthub</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <i className="ri-facebook-circle-line text-indigo-400 text-2xl cursor-pointer hover:scale-110 transition"></i>
            <i className="ri-twitter-x-line text-indigo-400 text-2xl cursor-pointer hover:scale-110 transition"></i>
            <i className="ri-youtube-line text-indigo-400 text-2xl cursor-pointer hover:scale-110 transition"></i>
          </div>
        </div>

        {/* Form */}
        <form className="bg-[#111111] rounded-xl p-6 flex flex-col space-y-4 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="bg-[#0a0a0a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-indigo-400" />
            <input type="email" placeholder="Email" className="bg-[#0a0a0a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-indigo-400" />
          </div>
          <input type="tel" placeholder="Phone" className="bg-[#0a0a0a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-indigo-400" />
          <textarea placeholder="Message" rows={4} className="bg-[#0a0a0a] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-indigo-400"></textarea>
          <button type="submit" className="bg-indigo-400 hover:bg-indigo-500 text-white py-2 rounded-md transition">
            Submit
          </button>
        </form>
      </div>

      {/* Map Embed */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border-none"
        ></iframe>
      </div>

      
    </div>
  );
};

export default Contact;

