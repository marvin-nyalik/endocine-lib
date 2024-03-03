import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Rocket } from '../../lib/types';

const url = 'https://api.spacexdata.com/v4/rockets';

export type State = {
  rockets: Rocket[],
  error: string | undefined,
  loading: boolean;
}

const initialState: State = {
  rockets: [],
  error: undefined,
  loading: false
}

export const fetchRockets = createAsyncThunk<Rocket[]>('rockets/fetch', async () => {
  try {
    const response = await axios.get<Rocket[]>(url);
    return response.data.map(rocket => ({
      id: rocket.id,
      name: rocket.name,
      country: rocket.country,
      description: rocket.description,
      company: rocket.company,
      flickr_images: rocket.flickr_images,
    }));
  } 
  catch(error){
    throw error;
  }
});

const rocketsSlice = createSlice({
  name:'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
