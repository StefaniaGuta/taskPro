import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://taskpro-app-bcac9d37037a.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Boards', 'Columns', 'BoardsId', 'Profile', 'BoardBg'],
  endpoints: (builder) => ({
    getFetchBoards: builder.query({
      query: () => '/ ',
      providesTags: ['Boards'],
    }),
    getFetchBoardById: builder.query({
      query: (boardName) => `/boards/${boardName}`,
      providesTags: ['BoardsId'],
    }),
    createBoard: builder.mutation({
      query: ({values, name, icon, backgroundImage}) => ({
        url: `/boards`,
        method: 'POST',
        body: {values, name, icon, backgroundImage}
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: builder.mutation({
      query: (boardName) => ({
        url: `/boards/${boardName}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards', 'Columns'],
    }),
    createColumn: builder.mutation({
      query: ({boardName, name}) => ({
        url: `/boards/${boardName}/column`,
        method: 'POST',
        body: { name }
      }),
      invalidatesTags: ['BoardsName', 'Columns'],
    }),
    createTask: builder.mutation({
      query: ({ values, boardName, id}) => ({
        url: `/boards/${boardName}/column/${id}/card`,
        method: 'POST',
        body: { values, boardName, id}
      }),
      invalidatesTags: ['Profile', 'BoardsId'],
    }),
    getFetchTaskById: builder.query({
      query: (boardId) => `/board/getById/${boardId}`,
      providesTags: ['Profile'],
    }),
    editColumn: builder.mutation({
      query: ({ values, id, boardName }) => ({
        url: `/boards/${boardName}/column/${id}`,
        method: 'PATCH',
        body: { values, boardName, id}
      }),
      invalidatesTags: ['BoardsName', 'Columns'],
    }),
    deleteColumn: builder.mutation({
      query: ({id, boardName}) => ({
        url: `boards/${boardName}/column/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BoardsName', 'Columns'],
    }),
    editBoard: builder.mutation({
      query: ({ values, boardName }) => ({
        url: `/boards/${boardName}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Boards', 'BoardsId'],
    }),
    updateTask: builder.mutation({
      query: ({values, id, boardName}) => ({
        url: `/board/${boardName}/card/${id}`,
        method: 'PATCH',
        body: {id, boardName, values},
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    deleteTask: builder.mutation({
      query: ({id, boardName}) => ({
        url: `/board/${boardName}/card/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    getBoardBdById: builder.query({
      query: (name) => `background/${name}`,
      providesTags: ['BoardsId'],
    }),
  }),
});

export const {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
  useDeleteBoardMutation,
  useCreateTaskMutation,
  useEditColumnMutation,
  useEditBoardMutation,
  useDeleteColumnMutation,
  useUpdateTaskMutation,
  useGetBoardBdByIdQuery,
  useDeleteTaskMutation,
} = boardsApi;