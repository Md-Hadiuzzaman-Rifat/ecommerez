import { apiSlice } from "../api/apiSlice";
import { addProduct } from "./productSlice";

export const productApi= apiSlice.injectEndpoints({
    tagTypes: ['Products', 'Product'],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:({page, limit})=>`/getProducts?page=${page}&limit=${limit}`,
            providesTags:['Products']
        }),
        // allProducts:builder.query({
        //     query:(data)=>`/getProducts?page=${data}`,
        //     providesTags:['Products']
        // }),
        getSingleProduct:builder.query({
            query:(id)=>`/getProduct/${id}`,
            providesTags:(result, error, arg)=>[{ type: 'Product', id: arg }]
        }),
        getSelectedProduct:builder.mutation({
            query:(data)=>({
                url:`/getSelectedProduct`,
                method:"POST",
                body:data
            })
        }),
        addProduct:builder.mutation({
            query:(data)=>({
                url:"/uploadProduct",
                method:"POST",
                body:data
            }),
            invalidatesTags: ["Products"]
        }),
        editProduct:builder.mutation({
            query: ({productId,productObj})=>({
                url:`/editProduct/${productId}`,
                method:"PUT",
                body:productObj
            }),
            invalidatesTags: (result, error, arg) => [
                "Products",
                { type: 'Product', id: arg.productId },
            ],
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/getProducts/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Products"]
        }),
        
    })
})

export const {useAddProductMutation, useGetSingleProductQuery, useGetProductsQuery, useEditProductMutation, useDeleteProductMutation, useGetSelectedProductMutation}=productApi