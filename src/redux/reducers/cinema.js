import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
export const getCinema = createAsyncThunk(
    'cinema/getCinema',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/films?${filter.status === 'free' ? 'status=free&' : ''}${filter.genre.length ? "genre=" + filter.genre + '&' : ''}${filter.year !== '' ? "year=" + filter.year+ '&' : ''}${filter.search !== '' ? "title_like=" + filter.search : ''} `)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState: {
        data: [],
        dataLength: 0,
        filter: {
                genre : '',
                year: '',
                search: ''
        },
        status: '',
        error: ''
    },
    reducers: {
        // getCinema: (state, action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
        changeGenre: (state,action) => {
            state.filter.genre = action.payload
        },
        changeYear: (state, action) => {
            state.filter.year = action.payload
        },
        changeSearch: (state, action) =>  {
            state.filter.search = action.payload
        }
    },
    extraReducers: {
        [getCinema.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getCinema.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getCinema.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }
})

export const {changeGenre, changeYear, changeSearch} = cinemaSlice.actions
export default cinemaSlice.reducer