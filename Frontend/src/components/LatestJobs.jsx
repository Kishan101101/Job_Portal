import React from "react";
import LatesetJobCards from "./LatesetJobCards";
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function LatestJobs() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#265df5]">Latest &Trending</span> Job Openings🔥
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatesetJobCards key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
