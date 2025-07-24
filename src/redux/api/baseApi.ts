import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Need to use the React-specific entry point to import createApi


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
      providesTags: ["task"],
    }),
     createTask: builder.mutation({
      query: (taskData) => ({
          url:"/tasks",
          method:"POST",
          body:taskData,
      }), 
      invalidatesTags:["task"],
    }),

    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTasksQuery, useCreateTaskMutation} = baseApi;