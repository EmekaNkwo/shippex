import moment from "moment";
import IconConsignee from "./IconComponents/IconConsignee";

import IconDestination from "./IconComponents/IconDestination";
import IconOrigin from "./IconComponents/IconOrigin";
import IconReceipt from "./IconComponents/IconReceipt";
import IconSender from "./IconComponents/IconSender";
import IconShipping from "./IconComponents/IconShipping";

import TimelineComponent from "./shared/CustomTimeline";

const ParcelDetails = ({ data }: { data: Record<string, any> }) => {
  return (
    <div className="w-full grid grid-cols-2 mt-[1rem]">
      <div>
        <div className="border-t border-l border-r border-[#E5E7EB] rounded-t-[12px] p-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#1F2937] text-[18px] font-semibold">
              {data.name}
            </h3>
            <span className="text-[14px] text-[#6B7280] font-light">
              Last updated{" "}
              {moment(data.modified).format("MMMM Do YYYY, hh:mm A")}
            </span>
          </div>
          <div className="flex flex-col gap-7 p-3 mt-3">
            <div className="grid grid-cols-2 items-center">
              <span className="text-[#6B7280] flex items-center gap-2">
                <IconSender /> Sender
              </span>
              <span className="text-[#1F2937]">
                {data.sender} {data.sender_name}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center">
              <span className="text-[#6B7280] flex items-center gap-2 ">
                <IconConsignee /> Consignee
              </span>
              <span className="text-[#1F2937]">{data.consignee}</span>
            </div>
            <div className="grid grid-cols-2 items-start">
              <span className="text-[#6B7280] flex items-center gap-2">
                <IconOrigin /> Origin Address
              </span>
              <span className="w-32 text-[#1F2937]">
                {data.origin_city}, {data.origin_state}, {data.origin_country}
              </span>
            </div>
            <div className="grid grid-cols-2 items-start">
              <span className="text-[#6B7280] flex items-center gap-2">
                <IconDestination /> Destination Address
              </span>
              <span className="w-36 text-[#1F2937]">
                {data.destination_city}, {data.destination_state},{" "}
                {data.destination_country}
              </span>
            </div>
            <div className="grid grid-cols-2 items-start">
              <span className="text-[#6B7280] flex items-center gap-2">
                <IconShipping /> Shipping Service
              </span>
              <span className="text-[#1F2937]">{data.shipping_service}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-start bg-[#F8FAFC] p-5 border-l border-r border-b rounded-b-[12px] border-[#E5E7EB]">
          <span className="text-[#6B7280] ml-2 flex items-center gap-2 ">
            <IconReceipt /> Total COD Amount
          </span>
          <span className="text-[#1F2937]">
            {data.total_cod} {""}
            {data.currency}
          </span>
        </div>
      </div>

      <div className="h-full p-6 ">
        <h3 className="pl-[0.4rem] mb-[1.5rem] font-bold text-[18px]">
          TIMELINE
        </h3>
        <div className="">
          <TimelineComponent events={data?.scans} />
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
