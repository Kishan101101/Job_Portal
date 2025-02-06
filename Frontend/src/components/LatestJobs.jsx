import React, { useState } from "react";
import LatestJobCards from "./LatesetJobCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function LatestJobs() {
  const { alljobs } = useSelector((state) => state.job);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 1; // Number of jobs per page

  // Calculate the range of jobs for the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const totalPages = Math.ceil(alljobs.length / jobsPerPage);

  // Event handlers for pagination Buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#265df5]">Latest & Trending</span> Job Openings🔥
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {alljobs.length > 0 ? (
          alljobs.slice(startIndex, endIndex).map((job) => (
            <Link key={job._id} to={`/description/${job?._id}`}>
              <LatestJobCards job={job} />
            </Link>
          ))
        ) : (
          <span>No Job Found</span>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-5">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          {"prev"}
        </Button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {"next"}
        </Button>
      </div>
    </div>
  );
}

export default LatestJobs;
