import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { PlanetList } from './pages/planetList/PlanetList';
import CharactersList from './pages/charactersList/CharactersList';
import SessionProvider from './context/SessionContext';

function App() {
  const [,] = useState(0);

  return (
    <>
      <SessionProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/planetas" element={<PlanetList />} />
            <Route path="/personajes" element={<CharactersList />} />
          </Routes>
        </BrowserRouter>
      </SessionProvider>
    </>
  );
}

export default App;
