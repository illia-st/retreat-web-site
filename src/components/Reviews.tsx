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
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsReady(true);
      if (swiperInstance) {
        swiperInstance.update();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [swiperInstance]);

  useEffect(() => {
    // Force update on resize
    const handleResize = () => {
      if (swiperInstance) {
        swiperInstance.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [swiperInstance]);

  return (
    <Container maxWidth="lg">
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
            px: { xs: 0, md: 2 },
            pb: { xs: 5, md: 6 },
            opacity: isReady ? 1 : 0,
            transition: 'opacity 0.3s ease',
            '& .swiper': {
              pb: { xs: 4, md: 5 },
              px: { xs: 1, md: 0 },
              overflow: 'visible',
            },
            '& .swiper-wrapper': {
              alignItems: 'center',
            },
            // Desktop navigation
            '& .swiper-button-next, & .swiper-button-prev': {
              display: { xs: 'none', md: 'flex' },
              color: theme.palette.primary.main,
              width: '44px',
              height: '44px',
              backgroundColor: alpha(theme.palette.background.paper, 0.95),
              borderRadius: '50%',
              border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                transform: 'scale(1.1)',
              },
              '&::after': {
                fontSize: '20px',
                fontWeight: 'bold',
              },
            },
            // Pagination dots
            '& .swiper-pagination': {
              bottom: { xs: '0', md: '10px' },
            },
            '& .swiper-pagination-bullet': {
              width: { xs: 8, md: 10 },
              height: { xs: 8, md: 10 },
              backgroundColor: alpha(theme.palette.primary.main, 0.3),
              opacity: 1,
              transition: 'all 0.3s ease',
              margin: { xs: '0 4px', md: '0 5px' },
            },
            '& .swiper-pagination-bullet-active': {
              width: { xs: 24, md: 30 },
              borderRadius: 5,
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectCoverflow,
              EffectCards,
            ]}
            effect={isMobile ? 'cards' : 'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 1 : 'auto'}
            spaceBetween={isMobile ? 0 : 30}
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
            loop={isMobile}
            speed={600}
            longSwipesRatio={0.3}
            threshold={10}
            resistance={true}
            resistanceRatio={0.85}
            allowTouchMove={true}
            observer={true}
            observeParents={true}
            watchOverflow={true}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 40,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                style={{
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '100%' : '800px',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: 420, sm: 460, md: 400 },
                    maxHeight: { xs: '75vh', sm: 'none' },
                    background:
                      theme.palette.mode === 'light'
                        ? `linear-gradient(135deg, ${alpha('#fff', 0.9)} 0%, ${alpha('#faf8f3', 0.95)} 100%)`
                        : `linear-gradient(135deg, ${alpha('#424242', 0.95)} 0%, ${alpha('#2a2a2a', 1)} 100%)`,
                    backdropFilter: 'blur(20px)',
                    borderRadius: { xs: '20px', md: '24px' },
                    p: { xs: 2.5, sm: 3.5, md: 5 },
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? isMobile
                          ? '0 10px 40px rgba(148, 145, 70, 0.15)'
                          : '0 20px 60px rgba(148, 145, 70, 0.2)'
                        : isMobile
                          ? '0 10px 40px rgba(0, 0, 0, 0.3)'
                          : '0 20px 60px rgba(0, 0, 0, 0.4)',
                    border:
                      theme.palette.mode === 'light'
                        ? `1px solid ${alpha('#949146', 0.15)}`
                        : `1px solid ${alpha('#949146', 0.2)}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    ...(!isMobile && {
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow:
                          theme.palette.mode === 'light'
                            ? '0 25px 80px rgba(148, 145, 70, 0.25)'
                            : '0 25px 80px rgba(0, 0, 0, 0.5)',
                      },
                    }),
                  }}
                >
                  {/* Top Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 16, sm: 24, md: 28 },
                      left: { xs: 16, sm: 24, md: 28 },
                      opacity: { xs: 0.06, md: 0.08 },
                      zIndex: 0,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
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
                      py: { xs: 2, md: 2 },
                      px: { xs: 0.5, sm: 2 },
                      overflow: 'auto',
                      '&::-webkit-scrollbar': {
                        width: '4px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.3),
                        borderRadius: '4px',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' },
                        lineHeight: { xs: 1.6, md: 1.8 },
                        color: theme.palette.text.primary,
                        textAlign: 'center',
                        whiteSpace: 'pre-line',
                        position: 'relative',
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
                      gap: 0.5,
                      pt: { xs: 2.5, md: 3 },
                      mt: { xs: 1.5, md: 2 },
                      borderTop: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        color: theme.palette.text.primary,
                        letterSpacing: '0.3px',
                      }}
                    >
                      {review.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.8),
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontWeight: 500,
                      }}
                    >
                      {review.role}
                    </Typography>
                  </Box>

                  {/* Bottom Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 16, sm: 24, md: 28 },
                      right: { xs: 16, sm: 24, md: 28 },
                      opacity: { xs: 0.06, md: 0.08 },
                      zIndex: 0,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Mobile Swipe Hint */}
        {isMobile && (
          <Typography
            variant="caption"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.6),
              fontSize: '0.85rem',
              textAlign: 'center',
              mt: -2,
            }}
          >
            👆 Swipe to see more reviews
          </Typography>
        )}
      </Stack>
    </Container>
  );
}

export default ReviewComponent;
