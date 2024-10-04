import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const helpApi = createApi({
  reducerPath: 'helpApi',
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
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: ({ comment }) => ({
        url: '/api/need-help',
        method: 'POST',
        body: { comment },
      }),
    }),
  }),
});

export const { usePostCommentMutation } = helpApi;