import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getClick = createAsyncThunk(
    'click/getClick',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/click?${filter?.branch ? 'url=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const clickSlice = createSlice({
    name: 'click',
    initialState: {
        data: [],
        filter: {
            branch: '',
            time: 'all',
            free: []
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
        },
        changeTime : (state, action) => {

            state.filter = {
                ...state.filter,
                time : action.payload
            }
        },
        changeFree : (state, action) => {
            state.filter = {
                ...state.filter,
                free: action.payload
            }
        }
    },
    extraReducers: {
        [getClick.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getClick.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getClick.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch,changeTime,changeFree} = clickSlice.actions
export default clickSlice.reducer