import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

export const apiSlice = createApi({ 
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Collections', 'User'],
    endpoints: (builder) => ({})
})

export const { useFetchAlbumsQuery } = apiSlice

