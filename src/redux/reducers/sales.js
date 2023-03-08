import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getSales = createAsyncThunk(
    'sales/getSales',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/sales`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const salesSlice = createSlice({
    name: 'sales',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getSales.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getSales.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getSales.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {} = salesSlice.actions
export default salesSlice.reducer