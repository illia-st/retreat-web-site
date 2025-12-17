/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import Masonry from 'react-masonry-css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import 'swiper/css';
import 'swiper/css/pagination';

import ReviewComponent from './Reviews';
import '../css/memories.css';

const mediaItems = [
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=xS7_hvP8Qt8',
  },
  {
    type: 'image',
    // url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    url: '/swiss2025/2026/nice_photos/1.jpeg',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/together_photos/1.jpeg',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/food/4.jpeg',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/together_photos/2.png',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/together_photos/3.png',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/nice_photos/2.jpeg',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/food/3.jpeg',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=ag2A7Hlm6nI',
    thumbnail: 'https://img.youtube.com/vi/ag2A7Hlm6nI/maxresdefault.jpg',
  },
  {
    type: 'image',
    url: '/swiss2025/2026/food/2.jpeg',
  },
  {
    type: 'image',
    url: '/tenerife2024/memories/1.jpg',
  },
  {
    type: 'image',
    url: '/tenerife2024/memories/2.PNG',
  },
  {
    type: 'image',
    url: '/tenerife2024/memories/3.PNG',
  },
  {
    type: 'image',
    url: '/tenerife2024/memories/4.PNG',
  },
  {
    type: 'image',
    url: '/tenerife2024/memories/5.png',
  },
];

function Memories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative' as const,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    backgroundColor: '#000',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
    },
  };

  return (
    // FIX 1: Changed 'm: 5' to specific padding.
    // On mobile (xs), we reduce side padding to '2' so content isn't squished.
    <Box sx={{ py: 5, px: { xs: 2, md: 5 }, maxWidth: 'lg', mx: 'auto' }}>
      <ReviewComponent />

      {/* --- Header Section --- */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mb: 6,
          mt: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            width: 'fit-content',
            fontSize: { xs: '2rem', md: '3rem' },
            textShadow:
              theme.palette.mode === 'light'
                ? '0 2px 10px rgba(255,255,255, 0.8)'
                : '0 2px 10px rgba(0,0,0, 0.3)',

            '&::before': {
              content: '""',
              position: 'absolute',
              zIndex: -1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '140%',
              background:
                theme.palette.mode === 'light'
                  ? 'radial-gradient(ellipse at center, #b3e5fc 50%, transparent 100%)'
                  : 'radial-gradient(ellipse at center, #02294F 50%, transparent 100%)',
              filter: 'blur(15px)',
              borderRadius: '50%',
              opacity: 0.8,
            },
          }}
        >
          Memories from previous retreats
        </Typography>
      </Box>

      {/* --- HYBRID LAYOUT --- */}

      {isMobile ? (
        // === MOBILE VIEW: Horizontal Swiper ===
        // FIX 2: Added overflow: 'hidden' here.
        // This ensures the slides that hang off the screen (due to slidesPerView=1.2)
        // don't create a horizontal scrollbar on the browser window.
        <Box
          sx={{
            overflow: 'visible',
          }}
        >
          {/* Note on styling: 
             If you want the slides to touch the edge of the screen (Full Bleed), 
             you can use mx: -2 here to counter the parent padding.
          */}
          <Box sx={{ mx: -2 }}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              style={{
                paddingBottom: '40px',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              {mediaItems.map((item, index) => (
                <SwiperSlide key={index} style={{ height: 'auto' }}>
                  <Box
                    sx={{
                      ...cardStyle,
                      height: '400px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.type === 'video' ? (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            zIndex: 2,
                            color: 'white',
                            opacity: 0.8,
                          }}
                        >
                          <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                        </Box>
                        <ReactPlayer
                          url={item.url}
                          light={true}
                          width="100%"
                          height="100%"
                          style={{ pointerEvents: 'none' }}
                          playing={false}
                        />
                      </>
                    ) : (
                      <img
                        src={item.url}
                        alt={`Memory ${index}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Removed the "Swipe to explore" Typography */}
          </Box>
        </Box>
      ) : (
        // === DESKTOP VIEW: Masonry ===
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {mediaItems.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedMedia(item)}
              sx={{ ...cardStyle, mb: 3 }}
            >
              {item.type === 'video' ? (
                <Box sx={{ position: 'relative', paddingTop: '177%' }}>
                  <ReactPlayer
                    url={item.url}
                    light={true}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    playIcon={
                      <PlayCircleOutlineIcon
                        sx={{ fontSize: 80, color: 'white', opacity: 0.9 }}
                      />
                    }
                  />
                </Box>
              ) : (
                <img
                  src={item.url}
                  alt={`Memory ${index + 1}`}
                  style={{
                    width: '100%',
                    display: 'block',
                    transition: 'transform 0.5s',
                  }}
                />
              )}
            </Box>
          ))}
        </Masonry>
      )}

      {/* --- MODAL (Shared) --- */}
      <Modal
        open={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: 'auto',
            maxWidth: '95vw',
            maxHeight: '90vh',
            outline: 'none',
            bgcolor: 'transparent',
            boxShadow: 24,
            p: 0,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={() => setSelectedMedia(null)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              zIndex: 10,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedMedia &&
            (selectedMedia.type === 'video' ? (
              <Box
                sx={{
                  width: { xs: '90vw', md: '800px' },
                  height: { xs: '60vh', md: '500px' },
                  bgcolor: 'black',
                }}
              >
                <ReactPlayer
                  url={selectedMedia.url}
                  controls
                  playing
                  width="100%"
                  height="100%"
                />
              </Box>
            ) : (
              <img
                src={selectedMedia.url}
                alt="Enlarged"
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  display: 'block',
                }}
              />
            ))}
        </Box>
      </Modal>
    </Box>
  );
}

export default Memories;
