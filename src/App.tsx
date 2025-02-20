import { useState } from 'react'; 
import { skillList } from './skill';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack } from '@mui/material';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < skillList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    setIndex((prevIndex) => (hasNext ? prevIndex + 1 : 0));
  }

  function handleBackClick() {
    setIndex((prevIndex) => (hasPrevious ? prevIndex - 1 : skillList.length - 1));
  }

  let skill = skillList[index];
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography variant="h4">10 Things that Require Zero Talent</Typography>
      <Typography variant="subtitle1">by Jordan Micko Deloria</Typography>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={skill.url}
          alt={skill.alt}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>{skill.thing}</Typography>
          <Typography variant="body2" color="text.secondary">{skill.detail}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button onClick={handleBackClick} variant="contained">Back</Button>
          <Button onClick={handleNextClick} variant="contained">Next</Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
