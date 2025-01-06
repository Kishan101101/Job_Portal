import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Badge } from "./ui/badge";
function Job() {
  return (
    <div className="p-5 rounded-md shadow-xl border border-gray-200 cursor-pointer bg-white">
      <div className="flex items-center justify-between">
        <p> 2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex intems-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">company Name</h1>
          <p className="text-sm text-gray-500">
            <MapPinIcon className="w-4 h-5 text-gray-700 inline" />
            India
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          natus.
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
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" className="rounded-lg">
          Details
        </Button>
        <Button className="bg-[#d8683f] rounded-lg">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;
