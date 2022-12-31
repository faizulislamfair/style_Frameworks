import './App.css';
import { Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { flexbox } from '@mui/system';




function App() {

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [submitting])

  return (
    <div className="App">

      <Button disableRipple variant="text" sx={{ mb: 10 }}>Text</Button>


      <Button variant="contained" color='success'>Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>

      <LoadingButton
        loading={submitting}
        loadingIndicator="Loading…"
        variant="outlined"
        onClick={() => setSubmitting(true)}
      >
        Fetch data
      </LoadingButton>

      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '5rem'
      }} title="Neymar">
        <Avatar alt="Neymar" src="https://pbs.twimg.com/media/FiRRfNfXEAMCwmk.jpg"
          sx={{
            height: '100px',
            width: '100px'
          }}
        />
        <Typography>
          Neymar
        </Typography>
      </div>


    </div >
  );
}

export default App;
