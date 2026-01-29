import {useAppDispatch} from '../../app/hooks.ts';
import {useSelector} from 'react-redux';
import {clearShows, fetchShows, selectShow} from './TvShowsPageSlice.ts';
import {useEffect, useState} from 'react';
import SearchBlockCard from '../../components/SearchBlock/SearchBlockCard.tsx';


const TvShowsPage = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const dispatch = useAppDispatch();
    const shows = useSelector(selectShow);


    useEffect(() => {
        if (searchInput.trim().length > 0) {
            dispatch(fetchShows(searchInput));
        } else {
            dispatch(clearShows());
        }
    },[searchInput, dispatch]);

    return (
       <>
           <SearchBlockCard shows={shows} value={searchInput} onChange={setSearchInput} />
       </>
    );
};

export default TvShowsPage;