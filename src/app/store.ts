import {configureStore} from '@reduxjs/toolkit';
import {showReducer} from '../containers/TvShowsPage/TvShowsPageSlice.ts';

export const store = configureStore({
    reducer: {
        show: showReducer
    }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

