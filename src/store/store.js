import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from './hotelsSlice';


const store = configureStore({
    reducer: {
        hotels: hotelsSlice,
    },
})

export default store;