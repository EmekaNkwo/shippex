/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../queryInterceptor";

export const shipmentApi = createApi({
  reducerPath: "shipment",
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 20,
  tagTypes: ["Shipment"],
  endpoints: (builder) => ({
    getShipment: builder.mutation({
      query: (body) => ({
        url: "method/frappe.client.get",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Shipment"],
    }),
  }),
});

export const { useGetShipmentMutation } = shipmentApi;
