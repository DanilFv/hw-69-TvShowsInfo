import type {ApiSearchResponse, ITvShow} from '../../types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI.ts';
import type {RootState} from '../../app/store.ts';

interface ShowState  {
    shows: ITvShow[];
    oneShow: ITvShow | null;
    loading: boolean;
}

const initialState: ShowState = {
    shows: [],
    oneShow: null,
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
            state.shows = action.payload.map((item): ITvShow => {
                return {
                    id: item.show.id,
                    name: item.show.name,
                    genres: item.show.genres,
                    network: item.show.network?.country?.name || 'Unknown',
                    image: item.show.image?.medium || 'https://integra-system.ru/images/new/001noimage.jpg'
                }
            });
        });
          builder.addCase(fetchShows.rejected, (state) => {
            state.loading = false;
        });

          builder.addCase(fetchOneShow.pending, (state) => {
              state.loading = true;
          });
           builder.addCase(fetchOneShow.fulfilled, (state, action) => {
              state.loading = false;
              state.oneShow = action.payload;
          });
            builder.addCase(fetchOneShow.rejected, (state) => {
              state.loading = false;
          });
    }
});

export const fetchShows = createAsyncThunk<ApiSearchResponse[], string>(
    'shows/search', async (request: string) => {
        const response = await axiosAPI.get<ApiSearchResponse[]>(`/search/shows?q=${request}`);
        return response.data;
    }
);

export const fetchOneShow = createAsyncThunk<ITvShow, number>('shows/searchOneShow' , async (id: number) => {
    const response = await axiosAPI.get(`/shows/${id}`);
    const data = response.data;

    return {
        id: data.id,
        name: data.name,
        genres: data.genres,
        network: data.network?.country?.name || 'Unknown',
        image: data.image?.medium || 'https://integra-system.ru/images/new/001noimage.jpg',
        summary: data.summary,
    };
});


export const selectShow = (state: RootState) => state.show.shows;
export const selectOneShow = (state: RootState) => state.show.oneShow;
export const selectLoader = (state: RootState) => state.show.loading;

export const showReducer = showSlice.reducer;
export const {clearShows} = showSlice.actions;