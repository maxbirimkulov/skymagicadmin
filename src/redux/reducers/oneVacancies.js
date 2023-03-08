import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneVacancies = createAsyncThunk(
    "oneVacancies/getOneVacancies",
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/vacancies/${id}`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)
const oneVacancies = createSlice({
    name: "oneVacancies",
    initialState : {
        oneVacancies : {},
        error : '',
        status : ''
    },
    reducers : {},
    extraReducers : {
        [getOneVacancies.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneVacancies.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneVacancies.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.oneVacancies = action.payload
        }
    }
})

export default oneVacancies.reducer