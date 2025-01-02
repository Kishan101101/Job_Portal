import React from "react";
import { Badge } from "./ui/badge";
import { MapPinIcon } from "@heroicons/react/24/solid";

function LatesetJobCards() {
  return (
    <div className="bg-white p-5 rounded-md shadow-xl border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>

        <p className="text-sm text-gray-500">
          <MapPinIcon className="w-4 h-5 text-gray-700 inline" />
          India
        </p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant="ghost" className={"text-[#124def] font-bold"}>
          15 Positions
        </Badge>
        <Badge variant="ghost" className={"text-[#6f06ef] font-bold"}>
          Full Time
        </Badge>
        <Badge variant="ghost" className={"text-[#ef4609] font-bold"}>
          26LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatesetJobCards;
