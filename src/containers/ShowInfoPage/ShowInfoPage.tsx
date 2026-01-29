import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
    fetchOneShow,
    selectLoader,
    selectOneShow
} from '../TvShowsPage/TvShowsPageSlice.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '../../app/hooks.ts';
import ShowCard from '../../components/ShowCard/ShowCard.tsx';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';

const ShowInfoPage = () => {
    const params = useParams<{id: string}>();
    const oneShow = useSelector(selectOneShow);
    const loader = useSelector(selectLoader);
    const dispatch = useAppDispatch()
    console.log(params.id);

useEffect(() => {
    if (params.id) {
        dispatch(fetchOneShow(Number(params.id)));
    }
},[params.id, dispatch]);


    return (
        <>
            {loader && <Spinner />}
            {oneShow && <ShowCard show={oneShow} />}
        </>
    );
};

export default ShowInfoPage;