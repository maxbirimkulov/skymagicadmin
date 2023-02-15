import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getEvents = createAsyncThunk(
    'events/getEvents',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/events`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getEvents.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getEvents.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getEvents.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {} = eventsSlice.actions
export default eventsSlice.reducer