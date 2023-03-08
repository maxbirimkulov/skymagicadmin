import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneBanner = createAsyncThunk(
    "oneBanner/getOneBanner",
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/banners/${id}`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)
const oneBanner = createSlice({
    name: "oneBanner",
    initialState : {
        banner : {},
        error : '',
        status : ''
    },
    reducers : {},
    extraReducers : {
        [getOneBanner.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneBanner.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneBanner.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.banner = action.payload
        }
    }
})

export default oneBanner.reducer