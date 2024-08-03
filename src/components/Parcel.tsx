import React, { useEffect, useState } from "react";
import { TextInput } from "./shared/CustomInput";
import { SubmitButton } from "./shared/CustomButton";
import IconSearchParcel from "./IconComponents/IconSearchParcel";
import ParcelDetails from "./ParcelDetails";
import { useGetShipmentMutation } from "../redux/api/authApi";
import { Spin } from "antd";
import { mainData } from "../data";
import IconNotFound from "./IconComponents/IconNotFound";

const Parcel = () => {
  const [search, setSearch] = useState<string>("");
  const [loadingData, setLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [parcelData, setParcelData] = useState<Record<string, any>>({});
  const [getShipment, { isLoading, isSuccess, data, isError, error }] =
    useGetShipmentMutation();
  const [errorMesg, setErrorMesg] = useState<string>("");

  const handleSearchShipment = async () => {
    setSearchQuery(search);
    setLoadingData(true);
    await getShipment({
      doctype: "AWB",
      filters: {
        name: ["like", `%${searchQuery}%`],
      },
    });
  };

  useEffect(() => {
    // Simulating an API response, getting Cors Issues

    if (isError && searchQuery !== "210173099796") {
      if (searchQuery.length < 12) {
        setErrorMesg("Please enter a valid AWB");
      } else if (searchQuery.length === 12 && searchQuery !== "210173099796") {
        setErrorMesg("AWB not found");
      }
      setLoadingData(false);
    }

    if (searchQuery === "210173099796") {
      if (isSuccess) {
        setParcelData(data);
      } else {
        setTimeout(() => {
          setParcelData(mainData);
          setErrorMesg("");
        }, 1000);

        setLoadingData(false);
      }
    }
  }, [isError, error, isSuccess, data, searchQuery]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <div className="flex items-start gap-3 justify-center bg-[#F8FAFC] p-6 w-full mt-[2rem] rounded-[8px]">
          <div className="flex flex-col gap-1">
            <TextInput
              placeholder="Enter AWB ID"
              className="w-[600px]"
              status={errorMesg !== "" ? "error" : ""}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            {isError && (
              <span className=" text-[12px] text-[#EF4444]">{errorMesg}</span>
            )}
          </div>
          <SubmitButton
            title="Track"
            className="w-[120px]"
            onClick={handleSearchShipment}
          />
        </div>
      </div>

      {isLoading || loadingData ? (
        <Spin className="mt-4" />
      ) : (data && isSuccess) || searchQuery === "210173099796" ? (
        <ParcelDetails data={parcelData} />
      ) : (
        <div className="flex flex-col items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {errorMesg === "AWB not found" ? (
            <div className="flex flex-col items-center gap-3">
              <div className="mb-[3rem]">
                <IconNotFound />
              </div>
              <span className="text-[24px] text-[#000] font-semibold">
                No results found
              </span>
              <span className="text-[14px] text-[#4B5563]">
                Please try again
              </span>
              <span className="text-[15px] mt-4 text-blueColor cursor-pointer">
                Retry
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="mb-[3rem]">
                <IconSearchParcel />
              </div>
              <span className="text-[14px] text-[#4B5563]">
                Enter a valid AWB ID to display details
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Parcel;
