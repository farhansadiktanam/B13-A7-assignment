import React from "react";
import { Link } from "react-router";

const NotfoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Fun Emoji/Graphic Section */}
      <div className="relative mb-8">
        <div className="text-9xl animate-bounce">👻</div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-100 rounded-[100%] blur-sm"></div>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-[#244D3F] mb-4">
        404: Ghosted!
      </h1>

      <p className="max-w-md text-lg text-gray-600 mb-10 leading-relaxed">
        We searched high and low, but this page is ignoring our calls. It’s not
        you, it’s... well, actually, it’s a dead link.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-8 py-3 bg-[#244D3F] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          Back to My Friends
        </Link>
      </div>

      {/* Small "Fine Print" Joke */}
      <p className="mt-12 text-xs text-gray-400 italic">
        * No real connections were harmed in the making of this error page.
      </p>
    </div>
  );
};

export default NotfoundPage;
