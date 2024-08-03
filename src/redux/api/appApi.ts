import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../queryInterceptor";

export const appApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    credentials: "include",
  }),
  tagTypes: ["auth", "shipment"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "method/login",
        method: "POST",
        body,
      }),
    }),
    getShipment: builder.mutation({
      query: (body) => ({
        url: "method/frappe.client.get",
        method: "POST",
        body,
      }),
      invalidatesTags: ["shipment"],
    }),
  }),
});

export const { useLoginMutation, useGetShipmentMutation } = appApi;
