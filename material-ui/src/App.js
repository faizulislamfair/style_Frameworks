import './App.css';
import Box from '@mui/material/Box';
import { createTheme, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import MUI_Card from './components/MUI_Card';
import Switch from '@mui/material/Switch';
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const themeDark = createTheme({
    palette: {
      mode: 'dark'
    }
  })


  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>

      <Switch onClick={() => setDarkMode(!darkMode)}></Switch>
      <div className="App">

        <Box sx={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          placeItems: 'center'
        }}>
          <CssBaseline />

          <MUI_Card />


          <Paper sx={{
            width: '100px',
            height: '100px'
          }}>

          </Paper>

        </Box>



      </div >
    </ThemeProvider>
  );
}

export default App;
