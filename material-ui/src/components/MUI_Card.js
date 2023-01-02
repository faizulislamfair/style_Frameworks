import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MUI_Card = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardMedia
                    sx={{ height: 210, borderRadius: 5 }}
                    image="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg"
                    title="green iguana"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default MUI_Card;