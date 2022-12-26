import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getRequests = createAsyncThunk(
    'requests/getRequests',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/request?${filter?.branch ? 'branch=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const requestsSlice = createSlice({
    name: 'requests',
    initialState: {
        data: [],
        filter: {
            branch: ''
        },
        status: '',
        error: ''
    },
    reducers: {
        changeBranch : (state, action) => {
            state.filter = {
                ...state.filter,
                branch: action.payload
            }
        }
    },
    extraReducers: {
        [getRequests.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getRequests.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getRequests.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch} = requestsSlice.actions
export default requestsSlice.reducer