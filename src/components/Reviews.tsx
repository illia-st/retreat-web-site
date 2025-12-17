/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  useTheme,
  Stack,
  alpha,
  Container,
  useMediaQuery,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

interface Review {
  id: number;
  text: string;
  name: string;
  role?: string;
}

function ReviewComponent() {
  const reviews: Review[] = [
    {
      id: 1,
      text: `The best gift to myself in many years!
A retreat is a great time for spiritual restoration, grounding, solitude with thoughts and the universe! The practices were very diverse and productive! 
Everything was organized and thought of up to the smallest detail for the comfort of all participants! 
Thanks a lot, girls… see you soon! Namaste 🙏🏼`,
      name: 'Halyna Klymentieva',
      role: 'Retreat Participant',
    },
    {
      id: 2,
      text: `The retreat was a breath of fresh air, a pause, a time for ourselves! Everything was perfect, from the place where we lived, the food we ate, by the way the girls cooked something new and fresh every day, to the time we spent in the practices. I cut off communication with the outside world as much as possible, I wanted to prolong the moment of this filling with a completely new energy, new feelings and to observe the changes in my body and consciousness. Thanks to the Rectirite I have introduced the practice into my life on a daily basis, I have seen ways to develop and paths to avoid. Priceless experience, will go again! 
Thank you!`,
      name: 'Yevheniia Podlypenko',
      role: 'Retreat Participant',
    },
    {
      id: 3,
      text: `Namaste girls
I still feel so peaceful and grateful after this retreat! To our wonderful yoga teachers, Vicky & Vicky - thank you, your calm guidance helped me feel so present and connected to nature
I really needed this. And to all the lovely women I met - your kindness, beauty, and laughter made this time truly special!
You're all so unique, and that truly inspires me! I left yesterday with a full heart and beautiful memories. Hope we meet again soon!`,
      name: 'Alexandra',
      role: 'Retreat Participant',
    },
    {
      id: 4,
      text: `Thank you so much for organizing this rejuvenating weekend yoga practice. Being surrounded by like-minded souls who share the same energy and intention felt truly uplifting and rare.
After two days of deep cleansing, I can already sense a noticeable release of stagnation in my abdominal area-it's as if my body is breathing freely again.
Even though I'm still on my way home, my heart is already longing for the next yoga retreat.
Grateful beyond words for this healing space and community.`,
      name: 'Inge',
      role: 'Retreat Participant',
    },
    {
      id: 5,
      text: `I am finally home, exhausted but inspired to continue the practice!
Thanks Vicky and Vicky for the organisation and everyone for being a part of it.
Peace!`,
      name: 'Natalie',
      role: 'Retreat Participant',
    },
    {
      id: 6,
      text: `Thank you all for everything!
      We really had a wonderful time and loved sharing this great retreat with all of you!
      Could not have asked for better company and of course no better yoga instructor.
      Thanks once again also for letting me bring Benji and that all of you have been so sweet,
      patient and loving with him`,
      name: 'Carmen',
      role: 'Retreat Participant',
    },
  ];

  const theme = useTheme();
  // Using 'md' as the breakpoint.
  // Down 'md' = Mobile/Tablet (Cards effect)
  // Up 'md' = Desktop (Coverflow effect)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.update();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [swiperInstance]);

  return (
    <Container maxWidth="lg" sx={{ overflow: 'hidden' }}>
      {' '}
      {/* Prevent page overflow */}
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 },
          width: '100%',
          margin: 'auto',
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              color: theme.palette.text.primary,
              mb: 1,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            What Our Guests Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              maxWidth: 600,
              mx: 'auto',
              px: 2,
            }}
          >
            Real experiences from our retreat participants
          </Typography>
        </Box>

        {/* Swiper Carousel */}
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            // Removed fixed paddings that mess up width calculations
            pb: { xs: 5, md: 6 },
            opacity: isReady ? 1 : 0,
            transition: 'opacity 0.3s ease',

            '& .swiper': {
              pb: { xs: 4, md: 5 },
              overflow: 'visible', // Keeps shadow/3D effect visible
            },

            // Desktop navigation styles
            '& .swiper-button-next, & .swiper-button-prev': {
              display: { xs: 'none', md: 'flex' },
              color: theme.palette.primary.main,
              width: '44px',
              height: '44px',
              backgroundColor: alpha(theme.palette.background.paper, 0.95),
              borderRadius: '50%',
              border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              zIndex: 10, // Ensure buttons are on top
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                transform: 'scale(1.1)',
              },
            },
            // Pagination
            '& .swiper-pagination': {
              bottom: { xs: '0', md: '10px' },
            },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Swiper
            // KEY PROP IS THE MOST IMPORTANT FIX HERE
            // It forces React to destroy and recreate the swiper when view changes
            key={isMobile ? 'mobile-swiper' : 'desktop-swiper'}
            onSwiper={setSwiperInstance}
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectCoverflow,
              EffectCards,
            ]}
            // Effect Configuration
            effect={isMobile ? 'cards' : 'coverflow'}
            grabCursor={true}
            centeredSlides={true} // Always center
            loop={false}
            speed={600}
            // Layout Configuration
            // For Cards (Mobile): effectively 1 slide
            // For Coverflow (Desktop): 'auto' allows side previews
            slidesPerView={isMobile ? 1 : 'auto'}
            spaceBetween={isMobile ? 0 : 30}
            // Specific Effect Settings
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 2,
              rotate: true,
              slideShadows: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={!isMobile}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // Container Styling
            style={{
              // On Mobile (Cards): The container width determines the card width
              // On Desktop (Coverflow): Container is full width, slides size themselves
              width: isMobile ? '280px' : '100%',
              maxWidth: isMobile ? '320px' : '1000px',
              margin: '0 auto',
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                style={{
                  // Desktop: Fixed width for coverflow slides
                  // Mobile: 100% of the container (which we sized above)
                  width: isMobile ? '100%' : '400px',
                  height: 'auto',
                  display: 'flex', // Ensures slide height matches content
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    // Height adjustments
                    minHeight: { xs: 400, sm: 420, md: 400 },
                    background:
                      theme.palette.mode === 'light'
                        ? `linear-gradient(135deg, ${alpha('#fff', 0.9)} 0%, ${alpha('#faf8f3', 0.95)} 100%)`
                        : `linear-gradient(135deg, ${alpha('#424242', 0.95)} 0%, ${alpha('#2a2a2a', 1)} 100%)`,
                    backdropFilter: 'blur(20px)',
                    borderRadius: { xs: '20px', md: '24px' },
                    p: { xs: 3, md: 5 },
                    // Shadow adjustments
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0 10px 40px rgba(148, 145, 70, 0.15)'
                        : '0 10px 40px rgba(0, 0, 0, 0.3)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    userSelect: 'none', // Improves dragging experience
                  }}
                >
                  {/* Top Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 24,
                      left: 24,
                      opacity: 0.08,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: '4rem',
                        color: theme.palette.primary.main,
                        transform: 'rotate(180deg)',
                      }}
                    />
                  </Box>

                  {/* Review Content */}
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                      py: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Georgia', serif",
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        lineHeight: 1.6,
                        textAlign: 'center',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {review.text}
                    </Typography>
                  </Box>

                  {/* Author Section */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      mt: 2,
                      pt: 2,
                      borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {review.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
                    >
                      {review.role}
                    </Typography>
                  </Box>

                  {/* Bottom Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      right: 24,
                      opacity: 0.08,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: '4rem',
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {isMobile && (
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', textAlign: 'center' }}
          >
            👆 Swipe to see more reviews
          </Typography>
        )}
      </Stack>
    </Container>
  );
}

export default ReviewComponent;
