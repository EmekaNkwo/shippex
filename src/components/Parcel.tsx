import React, { useEffect, useState } from "react";
import { TextInput } from "./shared/CustomInput";
import { SubmitButton } from "./shared/CustomButton";
import IconSearchParcel from "./IconComponents/IconSearchParcel";
import ParcelDetails from "./ParcelDetails";
import { useGetShipmentMutation } from "../redux/api/authApi";
import { ErrorMessage } from "../model";
import { Spin } from "antd";

const Parcel = () => {
  const [search, setSearch] = useState<string>("");

  const [getShipment, { isLoading, isSuccess, data, isError, error }] =
    useGetShipmentMutation();
  const [errorMesg, setErrorMesg] = useState<string>("");

  const handleSearchShipment = async () => {
    // try {
    //   const response = await axios.post(
    //     `${baseUrl}method/frappe.client.get`,
    //     {
    //       doctype: "AWB",
    //       filters: {
    //         name: ["like", `%210173066689%`],
    //       },
    //     },
    //     {
    //       withCredentials: true,
    //     }
    //   );
    //   // Handle the response from the server
    //   console.log(response.data);
    // } catch (error) {
    //   // Handle any errors that occur during the request
    //   console.error(error);
    // }
    await getShipment({
      doctype: "AWB",
      filters: {
        name: ["like", `%210173066689%`],
      },
    });
  };

  useEffect(() => {
    if (isError) {
      setErrorMesg(
        (error as ErrorMessage).data.message || "Please enter a valid AWB"
      );
    }
  }, [isError, error]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <div className="flex items-start gap-3 justify-center bg-[#F8FAFC] p-6 w-full mt-[2rem] rounded-[8px]">
          <div className="flex flex-col gap-1">
            <TextInput
              placeholder="Enter AWB ID"
              className="w-[600px]"
              status={errorMesg ? "error" : ""}
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

      {isLoading ? (
        <Spin />
      ) : data && isSuccess ? (
        <ParcelDetails data={data} />
      ) : (
        <div className="flex flex-col items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="mb-[3rem]">
            <IconSearchParcel />
          </div>
          <span className="text-[14px] text-[#4B5563]">
            Enter a valid AWB ID to display details
          </span>
        </div>
      )}
    </div>
  );
};

export default Parcel;
