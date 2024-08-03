import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
export const baseUrl = process.env.REACT_APP_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const cookieHeader = headers.get("set-cookie");
    console.log(cookieHeader);
    if (cookieHeader) {
      headers.set("Cookie", cookieHeader);
    }
    return headers;
  },
});

export const baseQueryForQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result: any = await baseQuery(args, api, extraOptions);

  return result;
};
