import './App.css';
import { Button, Rating, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { flexbox } from '@mui/system';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';





function App() {

  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState(2);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


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


      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '5rem',
        marginTop: '25px'
      }}>

        <PinterestIcon color='error' />
        <InstagramIcon />

      </div>

      <IconButton sx={{ mt: 5 }} aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <div>
        <Rating sx={{ mt: 2, color: 'skyblue' }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      <div>
        <TextField id="outlined-basic" label="Yoh!" variant="outlined" />
      </div>

      <div>
        <Switch {...label} defaultChecked />
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
      </div>


    </div >
  );
}

export default App;
