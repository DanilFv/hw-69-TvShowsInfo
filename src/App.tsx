import './App.css';
import {Container, Typography} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import ShowInfoPage from './containers/ShowInfoPage/ShowInfoPage.tsx';
import TvShowsPage from './containers/TvShowsPage/TvShowsPage.tsx';

const App = () => {

  return (
    <>
        <NavBar />
        <Container>
            <TvShowsPage />
            <hr/>
            <Routes>
                <Route path="/shows/:id" element={(<ShowInfoPage />)} />
                <Route path="/" element={(<Typography component='p' variant='h6' sx={{textAlign: 'center'}}>Search some TV Show!</Typography>)} />

                <Route path='*' element={(<Typography component='p' variant='h4' sx={{textAlign: 'center', mt: 3}}>Not found page!</Typography>)} />
            </Routes>
        </Container>
    </>
  )
};

export default App
