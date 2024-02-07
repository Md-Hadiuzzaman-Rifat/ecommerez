import {apiSlice} from "../api/apiSlice"

export const usersApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(data)=>({
                url:"/addUser",
                method:"POST",
                body:data
            }),
        }),
        getUsers:builder.query({
            query:(data)=>({
                url:"/getUser",
                method:"GET",
                body:data
            }),
        }),
        editUsers:builder.mutation({
            query:(data)=>({
                url:"/editUser",
                method:"PUT",
                body:data
            }),
        })
    })
}) 
export const {useAddUserMutation, useGetUsersQuery, useEditUsersMutation}=usersApi
;