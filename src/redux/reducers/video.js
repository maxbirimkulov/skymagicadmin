import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getVideo = createAsyncThunk(
    'video/getVideo',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/video`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return  rejectWithValue(err.message)
        }
    }
)

const gallerySlice = createSlice({
    name: 'video',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {

    },
    extraReducers: {
        [getVideo.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getVideo.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getVideo.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
        }
    }
})

export const {} = gallerySlice.actions
export default gallerySlice.reducer