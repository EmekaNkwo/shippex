import React from "react";
import IconPackageCreated from "../IconComponents/IconPackageCreated";
import IconPackageCheck from "../IconComponents/IconPackageCheck";
import IconPackageSearch from "../IconComponents/IconPackageSearch";
import moment from "moment";
interface TimelineEvent {
  date?: string;
  title?: string;
  scan_comment?: string;
  added_by?: string;
  scan_date?: string;
  avatar?: string;
  scan?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const TimelineComponent: React.FC<TimelineProps> = ({ events }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "'Proof of Pick-up(PUP)":
        return <IconPackageSearch />;
      case "PUP":
        return <IconPackageCheck />;
      default:
        return <IconPackageCreated />;
    }
  };
  return (
    <div className="relative max-w-xl mx-auto">
      {events?.map((event, index) => (
        <div key={index} className="flex w-full">
          <div className="flex flex-col w-28 lg:w-36 pr-8">
            <span className="text-[14px] font-medium text-[#6B7280]">
              {moment(event?.scan_date).format("hh:mm A")}
            </span>
            <span className="text-[14px] font-medium text-[#6B7280]">
              {moment(event?.scan_date).format("MMM Do YYYY")}
            </span>
          </div>

          <div className="flex-grow border-l-[1.5px] border-[#E5E7EB] pl-14 relative ">
            <div className="absolute w-7 h-7 mb-[1rem] -left-[15px] top-[1px]  bg-[#fff] border border-[#E5E7EB] rounded-full p-[5px]">
              {getStatusIcon(String(event?.scan))}
            </div>
            <div className="mb-[2rem] flex flex-col gap-[5px]">
              <h3 className="text-[16px] font-semibold text-[#1F2937]">
                {event?.scan}
              </h3>
              <p className="text-[#6B7280] text-[16px] font-medium">
                {event?.scan_comment && `comment: ${event?.scan_comment}`}
              </p>
              <p className="text-[#1F2937] flex items-center gap-2 text-[15px] font-semibold">
                {event?.added_by}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
