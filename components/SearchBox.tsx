"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// components
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[488px] bg-white max-h-max flex flex-col border border-outline rounded-[20px] p-10"
    >
      {/* input, calendar, date picker */}
      <div className="mb-[20px]">
        {/* label */}
        <Label htmlFor="destination">Where are you going?</Label>
        {/* input & icon */}
        <div className="relative flex items-center mb-[20px]">
          <Input
            type="text"
            id="destination"
            placeholder="try 'Singapore'"
            className=""
          />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>
        <div className="flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0">
          {" "}
          {/* date picker */}
          <div className="flex flex-col flex-1">
            {/* check in */}
            <Label>Check in</Label>
            <DatePicker />
          </div>
          {/* date picker */}
          <div className="flex flex-col flex-1">
            {/* check out */}
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {" "}
        {/* select, checkbox, btn */}
        <div className="flex flex-col flex-1 mb-[24px]">
          <Label>Guest</Label>
          <GuestSelect />
        </div>
        {/* checkbox */}
        <div className="flex items-center gap-x-3 mb-[24px]">
          {" "}
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="font-semibold mb-0">
            Pay when checking in?
          </Label>
        </div>
        {/* btn */}
        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
