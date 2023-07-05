import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL_INTERNAL } from '../../constants';
import { internalType, internalUrl } from './internal.constants';
import { IExample } from './internal.model';

export const internalApi = createApi({
  reducerPath: 'internalAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL_INTERNAL,
      mode: "cors",
      prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Origin', '*')
        return headers
      }
    }),
  tagTypes: [internalType],
  endpoints: (build) => ({
    fetchAllEntries: build.query<IExample[], void>({
      query: () => ({
        url: internalUrl,
      }),
      providesTags: (result) => [internalType],
    }),
    create: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: internalUrl,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [internalType],
    }),
    update: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: `${internalUrl}/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: [internalType],
    }),
    delete: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: `${internalUrl}/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [internalType],
    }),
  }),
});
