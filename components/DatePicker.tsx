"use client";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className={cn(
            "w-full justify-between text-left font-medium mb-4",
            !date && "text-black"
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="mr-2 h-5 w-5 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl"
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
