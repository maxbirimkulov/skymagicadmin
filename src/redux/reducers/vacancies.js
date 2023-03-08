import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getVacancies = createAsyncThunk(
    'vacancies/getVacancies',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/vacancies?${filter?.branch ? 'branch=' + filter.branch + '&' : ''}`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const vacanciesSlice = createSlice({
    name: 'vacancies',
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
        [getVacancies.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getVacancies.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getVacancies.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {changeBranch} = vacanciesSlice.actions
export default vacanciesSlice.reducer