import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Auth", "Profile", "Users", "Permissions"],

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: (builder) => ({
        // 🔐 LOGIN
        login: builder.mutation({
            query: (credentials) => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Auth", "Profile"],
        }),

        // 📝 REGISTER
        register: builder.mutation({
            query: (data) => ({
                url: "auth/register",
                method: "POST",
                body: data,
            }),
        }),

        getAllUsers: builder.query({
            query: () => ({
                url: "users",
                method: "GET",
                // body: data,
            }),
        }),

        checkToken: builder.query({
            query: () => ({
                url: "auth/checkToken",
                method: "GET",
            }),

            providesTags: ["Auth"],
        }),

        profile: builder.query({
            query: () => ({
                url: "auth/profile",
                method: "GET",
            }),
            providesTags: ["Profile"],
        }),


        addPermission: builder.mutation({
            query: (data) => ({
                url: "permissions",
                method: "POST",
                body: data,
            }),
        }),


    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useCheckTokenQuery,
    useAddPermissionMutation,
    useGetAllUsersQuery,
    useProfileQuery
    // useRegisterMutation
} = api;
