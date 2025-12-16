import { Box, Grid } from '@mui/material';
import ReactPlayer from 'react-player';

const videos = [
  'https://youtube.com/shorts/ag2A7Hlm6nI?si=aczvtcW87-KSnfM0',
  'https://youtube.com/shorts/xS7_hvP8Qt8?si=JbqwL25s3MZMgBEa',
];

function Video() {
  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {videos.map((url, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <ReactPlayer url={url} controls />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Video;
