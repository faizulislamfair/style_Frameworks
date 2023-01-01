import './App.css';
import { Button, Rating, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
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

  const isActive = true;


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


      <div>
        <Button variant='contained' sx={[{
          border: '1px solid crimson',
          bgcolor: 'goldenrod',
          marginTop: '25px',
          padding: '1rem',
          boxShadow: 5,
          width: {
            xs: 100, // theme.breakpoints.up('xs')
            sm: 200, // theme.breakpoints.up('sm')
            md: 300, // theme.breakpoints.up('md')
            lg: 400, // theme.breakpoints.up('lg')
            xl: 500, // theme.breakpoints.up('xl')
          },

          '	&.MuiButton-root': {
            padding: '2rem'
          }
        },

        isActive && {
          bgcolor: 'pink'
        }
        ]}>
          Duckling!
        </Button>
      </div>

    </div >
  );
}

export default App;
