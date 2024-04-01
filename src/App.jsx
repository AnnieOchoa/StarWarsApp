import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { PlanetList } from './pages/planetList/PlanetList';
import CharactersList from './pages/charactersList/CharactersList';
import SessionProvider from './context/SessionContext';
import FilmsList from './pages/filmsList/FilmsList';
import Favorites from './pages/favorites/Favorites';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <SessionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
              <Route index path="/" element={<Home />} />
              <Route path="/planetas" element={<PlanetList />} />
              <Route path="/personajes" element={<CharactersList />} />
              <Route path="/favoritos" element={<Favorites />} />
              <Route path="/peliculas" element={<FilmsList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SessionProvider>
    </>
  );
}

export default App;
