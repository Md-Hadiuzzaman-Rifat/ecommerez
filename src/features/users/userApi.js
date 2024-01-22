import {apiSlice} from "../api/apiSlice"

export const usersApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(data)=>({
                url:"/addUser",
                method:"PATCH",
                body:data
            }),
        })
    })
})
export const {useAddUserMutation}=usersApi
;