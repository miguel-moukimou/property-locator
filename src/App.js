import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './Components/Home';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  );
}

export default App;
