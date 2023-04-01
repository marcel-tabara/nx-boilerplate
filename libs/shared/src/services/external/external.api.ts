import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL_EXTERNAL } from '../../constants';
import { externalType, externalUrl } from './external.constants';
import { IExample } from './external.model';

export const externalApi = createApi({
  reducerPath: 'externalAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL_EXTERNAL,
      mode: "cors",
      prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Origin', '*')
        return headers
      }
    }),
  tagTypes: [externalType],
  endpoints: (build) => ({
    fetchAllEntries: build.query<IExample, void>({
      query: () => ({
        url: externalUrl,
      }),
      providesTags: (result) => [externalType],
    }),
  }),
});
