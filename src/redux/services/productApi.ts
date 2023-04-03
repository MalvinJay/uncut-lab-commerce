import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Order = {
  id: number;
  name: string;
  email: number;
};

export const orderApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], null>({
      query: () => "products",
    }),
    getOrdersById: builder.query<Order, { id: string }>({
      query: ({ id }) => `products/${id}`,
    }),
  }),
});

// export const { useGetProductsQuery, useGetProductsByIdQuery } = orderApi;
