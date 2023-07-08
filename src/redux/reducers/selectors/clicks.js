import {createSelector} from "@reduxjs/toolkit";


export const clickSlice = (state) => state.click


export const filterClick = createSelector(clickSlice, (state) => {
    if (state.filter.time === 'day') {
        return state.data.filter((item) => Date.parse(item.createdAt) > new Date(new Date().toISOString().slice(0, 10)).getTime()  )
    } else if (state.filter.time === 'week'){
        return state.data.filter((item) => Date.parse(item.createdAt) > Date.now() - 86400000 * 7  )
    } else if (state.filter.time === 'month'){
        return state.data.filter((item) => Date.parse(item.createdAt) > Date.now() - 86400000 * 30  )
    } else if (state.filter.time === 'free') {
        return state.data.filter(item => Date.parse(item.createdAt) > new Date(state.filter.free[0]) &&  Date.parse(item.createdAt) <  new Date(state.filter.free[1]))
    } else {
        return state.data
    }
})