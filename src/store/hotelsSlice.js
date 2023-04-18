import { createSlice} from "@reduxjs/toolkit";


const initialHotelState = { hotels: [], loading: false };

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialHotelState,
  reducers: {
    hotelsLoading: (state) => {
        state.loading = true;
    },
    hotelsLoaded:(state, action) => {
        state.hotels = action.payload;
        state.loading = false;
    }
  },
});


export const {hotelsLoading, hotelsLoaded} = hotelsSlice.actions;
export default hotelsSlice.reducer
