import {useAppDispatch} from '../../app/hooks.ts';
import {useSelector} from 'react-redux';
import {clearShows, fetchShows, selectShow} from './TvShowsPageSlice.ts';
import {useEffect, useState} from 'react';


const TvShowsPage = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const dispatch = useAppDispatch();
    const shows = useSelector(selectShow);


    useEffect(() => {
        if (searchInput.trim()) {
            dispatch(fetchShows(searchInput));
        } else {
            dispatch(clearShows());
        }
    },[searchInput, dispatch]);

    return (
       <>
       </>
    );
};

export default TvShowsPage;