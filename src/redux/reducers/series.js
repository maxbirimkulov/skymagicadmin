import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getSeries = createAsyncThunk(
    'series/getSeries',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios('/series')
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        data: [],
        dataLength: 0,
        filter: {},
        status: '',
        error: ''
    },
    reducers: {
        // getCinema: (state, action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
    },
    extraReducers: {
        [getSeries.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getSeries.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getSeries.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }
})

export const {} = seriesSlice.actions
export default seriesSlice.reducer