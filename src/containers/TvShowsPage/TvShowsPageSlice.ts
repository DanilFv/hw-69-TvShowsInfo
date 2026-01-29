import type {ApiSearchResponse, ITvShow} from '../../types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import type {RootState} from '../../app/store.ts';

interface ShowState  {
    shows: ITvShow[];
    loading: boolean;
}

const initialState: ShowState = {
    shows: [],
    loading: false,
}

const showSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        clearShows: (state)  => {
            state.shows = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShows.pending, (state) => {
            state.loading = true;
        });
         builder.addCase(fetchShows.fulfilled, (state, action) => {
            state.loading = false;
            state.shows = action.payload.map((item) => item.show);
        });
          builder.addCase(fetchShows.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const fetchShows = createAsyncThunk<ApiSearchResponse[], string>(
    'shows/search', async (request: string) => {
        const response = await axiosAPI.get(request);
        return response.data;
    }
);

export const selectShow = (state: RootState) => state.show.shows;

export const showReducer = showSlice.reducer;
export const {clearShows} = showSlice.actions;