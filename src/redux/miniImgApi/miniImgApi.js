import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const miniImgApi = createApi({
  reducerPath: 'miniImg',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://taskpro-app-bcac9d37037a.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['MiniImg'],
  endpoints: (builder) => ({
    getMiniImg: builder.query({
      query: () => '/',
      providesTags: ['MiniImg'],
    }),
    editBoard: builder.mutation({
      query: ({userId, backgroundImage, name}) => ({
        url: `/api/auth/users/${userId}/set-background`,
        method: 'PATCH',
        body: { backgroundImage, name },
      }),
    }),
  }),
});

export const { useGetMiniImgQuery } = miniImgApi;