import React from "react";

function FeatureSectionOne() {
  return (
    <div className="h-[95vh] w-full bg-gray-100 flex items-center p-20 pb-30 flex-col">
      <div className="text-5xl">Learn what matters today</div>
      <div className="text-2xl p-6 flex flex-col items-center">
        <div className="items-center p-2">
          from the recommendation of a system who focuses on todays market.
        </div>
        <div className="items-center p-1">
          You should get an upgrade from chatGPT
        </div>
        <div className="items-center p-1 pb-8">
          Get integrations which make goal completion a piece of cake.
        </div>
      </div>
      <div className="flex-1 flex gap-5 justify-center border border-4 gap-10">
        <div className="bg-green-400 h-80 w-80"></div>
        <div className="bg-green-400 h-80 w-80"></div>
        <div className="bg-green-400 h-80 w-80"></div>
      </div>
    </div>
  );
}

export default FeatureSectionOne;
