import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/users`)
            if (res.statusText !== 'OK'  && res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        dataLength: 0,
        filter: {},
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getUsers.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getUsers.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getUsers.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload.users
            state.dataLength = action.payload.dataLength
        }
    }
})

export const {} = usersSlice.actions
export default usersSlice.reducer