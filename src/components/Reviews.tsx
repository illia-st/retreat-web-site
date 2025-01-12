import React, { createRef, Ref, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Stack,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/transitions-reviews.css'; // Include the CSS file for animations

// Sample reviews data
interface Review {
  id: number;
  text: string;
  name: string;
  nodeRef: Ref<HTMLElement | undefined>;
}

function ReviewComponent() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      text: `The best gift to myself in many years!
  A retreat is a great time for spiritual restoration, grounding, solitude with thoughts and the universe! The practices were very diverse and productive! 
  Everything was organized and thought of up to the smallest detail for the comfort of all participants! 
  Thanks a lot, girls… see you soon! Namaste 🙏🏼`,
      name: 'Halyna Klymentieva',
      nodeRef: createRef(),
    },
    {
      id: 2,
      text: `The retreat was a breath of fresh air, a pause, a time for ourselves! Everything was perfect, from the place where we lived, the food we ate, by the way the girls cooked something new and fresh every day, to the time we spent in the practices. I cut off communication with the outside world as much as possible, I wanted to prolong the moment of this filling with a completely new energy, new feelings and to observe the changes in my body and consciousness. Thanks to the Rectirite I have introduced the practice into my life on a daily basis, I have seen ways to develop and paths to avoid. Priceless experience, will go again! 
  Thank you!`,
      name: 'Yevheniia Podlypenko',
      nodeRef: createRef(),
    },
  ]);
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          width: '100%',
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Animated Review Box */}
        <Box
          sx={{
            position: 'relative',
            width: '500px',
            textAlign: 'center',
            height: isXs ? 850 : 450,
            overflow: 'hidden',
          }}
        >
          <TransitionGroup component={null}>
            <CSSTransition
              key={reviews[currentIndex].id}
              nodeRef={reviews[currentIndex].nodeRef}
              timeout={300}
              classNames="review"
            >
              <Box
                ref={reviews[currentIndex].nodeRef}
                sx={{
                  bgcolor: '#f0f0f0',
                  borderRadius: '16px',
                  p: 2,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  border: '1px solid #ddd',
                  position: 'relative',
                  width: '100%',
                  height: isXs ? 850 : 450,
                  top: 0,
                }}
              >
                <Box
                  height="100%"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center" // Center the content vertically
                  textAlign="center" // Optional for text alignment
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      fontStyle: 'italic',
                      fontSize: '1.5rem',
                      color: theme.palette.common.black,
                    }}
                  >
                    &quot;{reviews[currentIndex].text}&quot;
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      marginTop: 1,
                      color: theme.palette.common.black,
                    }}
                  >
                    - {reviews[currentIndex].name}
                  </Typography>
                </Box>
              </Box>
            </CSSTransition>
          </TransitionGroup>
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Pagination Info */}
      <Box>
        <Typography variant="caption">
          {currentIndex + 1} of {reviews.length}
        </Typography>
      </Box>
    </Stack>
  );
}

export default ReviewComponent;
