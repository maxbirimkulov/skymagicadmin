import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneSales = createAsyncThunk(
    "oneSales/getOneSales",
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/sales/${id}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)
const oneSales = createSlice({
    name: "oneSales",
    initialState : {
        banner : {},
        error : '',
        status : ''
    },
    reducers : {},
    extraReducers : {
        [getOneSales.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneSales.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneSales.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.sales = action.payload
        }
    }
})

export default oneSales.reducer