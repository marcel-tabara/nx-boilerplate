import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '../../constants';
import { examplesType, examplesUrl } from './example.constants';
import { IExample } from './example.model';

export const exampleApi = createApi({
  reducerPath: 'exampleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [examplesType],
  endpoints: (build) => ({
    fetchAllExamples: build.query<IExample[], number>({
      query: (limit = 5) => ({
        url: examplesUrl,
        params: {
          limit,
        },
      }),
      providesTags: (result) => [examplesType],
    }),
    create: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: examplesUrl,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [examplesType],
    }),
    update: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: `${examplesUrl}/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: [examplesType],
    }),
    delete: build.mutation<IExample, IExample>({
      query: (post) => ({
        url: `${examplesUrl}/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [examplesType],
    }),
  }),
});
