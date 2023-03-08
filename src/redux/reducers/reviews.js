import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/review?${filter?.branch ? 'branch=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const reviewsSlice = createSlice({
    name: 'reviews',
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
        [getReviews.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getReviews.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getReviews.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch} = reviewsSlice.actions
export default reviewsSlice.reducer