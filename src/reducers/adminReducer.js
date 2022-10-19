import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminData:'old data'
}

const adminReducer = createSlice ({
    name:'adminPage',
    initialState,
    reducers:{
        getdata: (state) => {
            state.adminData = 'new data'
        }
    }
})

export const { getdata } = adminReducer.actions
export default adminReducer.reducer

