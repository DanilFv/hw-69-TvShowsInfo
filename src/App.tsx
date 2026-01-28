import './App.css';
import {Container, Typography} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import TvShowsPage from './containers/TvShowsPage/TvShowsPage.tsx';
import NavBar from './components/NavBar/NavBar.tsx';

const App = () => {

  return (
    <>
        <NavBar />
        <Container>
            <Routes>
                <Route path="/" element={(<TvShowsPage />)} />
                <Route path="/shows/:id" element={(<TvShowsPage />)} />

                <Route path='*' element={(<Typography component='p' variant='h4' sx={{textAlign: 'center', mt: 3}}>Not found page!</Typography>)} />
            </Routes>
        </Container>
    </>
  )
};

export default App
