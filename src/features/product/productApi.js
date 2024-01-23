import { apiSlice } from "../api/apiSlice";

export const productApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addProduct:builder.mutation({
            query:(data)=>({
                url:"/uploadProduct",
                method:"POST",
                body:data
            })
        }),
        getProducts:builder.query({
            query:()=>`/getProducts`
        }),
        getSingleProduct:builder.query({
            query:(id)=>`/getProduct/${id}`
        }),

        getSelectedProduct:builder.mutation({
            query:(data)=>({
                url:`/getSelectedProduct`,
                method:"POST",
                body:data
            })

        }),

        editProduct:builder.mutation({
            query: ({productId,productObj})=>({
                url:`/editProduct/${productId}`,
                method:"PATCH",
                body:productObj
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/getProducts/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useAddProductMutation, useGetSingleProductQuery, useGetProductsQuery, useEditProductMutation, useDeleteProductMutation, useGetSelectedProductMutation}=productApi