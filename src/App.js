import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/listings" element={<Listings />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Home />
      </StyledEngineProvider>
    </>
  );
}

export default App;
