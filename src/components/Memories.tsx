import { Box, Typography, Modal } from '@mui/material';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import '../css/memories.css'; // See CSS below
import ReviewComponent from './Reviews';

const mediaItems = [
  {
    type: 'video',
    url: 'https://youtube.com/shorts/ag2A7Hlm6nI?si=aczvtcW87-KSnfM0',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb',
  },
  {
    type: 'video',
    url: 'https://youtube.com/shorts/xS7_hvP8Qt8?si=JbqwL25s3MZMgBEa',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
  },
];

function Memories() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Box sx={{ m: 5 }}>
      <Typography
        variant="h3"
        sx={(theme) => ({
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          mb: 5,
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(90deg, transparent, #b3e5fc, transparent)'
              : `linear-gradient(90deg, transparent, #02294F, transparent)`,
        })}
      >
        Our Memories
      </Typography>
      <ReviewComponent />

      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {mediaItems.map((item, index) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => item.type === 'image' && setSelectedMedia(item)}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 2,
              cursor: item.type === 'image' ? 'pointer' : 'default',
              transition: 'all 0.3s ease',
              mb: 2,
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
              },
            }}
          >
            {item.type === 'video' ? (
              <ReactPlayer url={item.url} controls width="100%" />
            ) : (
              <img
                src={item.url}
                alt={`Memory ${index + 1}`}
                style={{ width: '100%', display: 'block' }}
              />
            )}
          </Box>
        ))}
      </Masonry>

      <Modal
        open={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia && (
            <img
              src={selectedMedia.url}
              alt="Enlarged"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '8px',
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Memories;
