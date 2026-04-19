import React from "react";

const Stats = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center ">
          <p className="text-3xl font-bold text-[#244D3F]">10</p>
          <p className="text-sm text-gray-500 font-medium">Total Friends</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <p className="text-3xl font-bold text-emerald-600">3</p>
          <p className="text-sm text-gray-500 font-medium">On Track</p>
        </div>

        <div className="text-center border-l border-gray-100">
          <p className="text-3xl font-bold text-orange-500">6</p>
          <p className="text-sm text-gray-500 font-medium">Need Attention</p>
        </div>

        <div className="text-center border-l border-gray-100">
          <p className="text-3xl font-bold text-[#244D3F]">12</p>
          <p className="text-sm text-gray-500 font-medium">Interactions</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
