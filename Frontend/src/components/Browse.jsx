import React from "react";
import Job from "./Job";
import Navbar from "./shared/Navbar";
const allJobs = [1, 2, 3, 4, 5, 6];
function Browse() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs?.length})
        </h1>
        <div className="flex-1 h-[88vh] overflow-y-auto  no-scrollbar pb-5">
          <div className="grid grid-cols-3 gap-4">
            {allJobs?.length !== 0 ? (
              allJobs?.map((job) => {
                return <Job />;
              })
            ) : (
              <span>No Job Found</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
