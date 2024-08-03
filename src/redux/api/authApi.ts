import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryForQuery, baseUrl } from "../queryInterceptor";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const cookieHeader = headers;
      console.log(cookieHeader);
      // if (cookieHeader) {
      //   headers.set("Cookie", cookieHeader);
      // }
      return headers;
    },
  }),

  tagTypes: ["auth", "shipment"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "method/login",
        method: "POST",
        body,
        credentials: "include",
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

export const { useLoginMutation, useGetShipmentMutation } = authApi;
