import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

// let it be hardcoded for now
function Video() {
  return (
    <Box
      sx={{
        // mt: 10,
        // mb: 10,
        m: 5,
      }}
      display="flex"
      justifyContent="center"
    >
      <ReactPlayer url="https://youtube.com/shorts/ag2A7Hlm6nI?si=aczvtcW87-KSnfM0" />
    </Box>
  );
}

export default Video;
