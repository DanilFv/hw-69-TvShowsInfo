import {useAppDispatch} from '../../app/hooks.ts';
import {useSelector} from 'react-redux';
import {
    clearShows,
    fetchShows,
    selectLoader,
    selectShow
} from './TvShowsPageSlice.ts';
import {useEffect, useState} from 'react';
import SearchBlockCard from '../../components/SearchBlock/SearchBlockCard.tsx';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';


const TvShowsPage = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const dispatch = useAppDispatch();
    const shows = useSelector(selectShow);
    const loader = useSelector(selectLoader);


    useEffect(() => {
        if (searchInput.trim().length > 0) {
            dispatch(fetchShows(searchInput));
        } else {
            dispatch(clearShows());
        }
    },[searchInput, dispatch]);

    return (
       <>
           {loader && <Spinner />}
           <SearchBlockCard shows={shows} value={searchInput} onChange={setSearchInput} />
       </>
    );
};

export default TvShowsPage;