/* eslint-disable no-console */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

export interface AccomodationUnit {
  icon: JSX.Element;
  title: string;
  titleWithPrice: string | null;
  price: string | null;
  image: string;
}

export interface AccomodationInterface {
  units: AccomodationUnit[];
  description: string;
}

function Accomodation({ units, description }: AccomodationInterface) {
  console.log(units);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = units[selectedItemIndex];

  return (
    <Container id="price" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              component="h2"
              variant="h4"
              color="text.primary"
              fontWeight="bold"
              sx={{ fontSize: '1.75rem' }}
            >
              Accomodations
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, fontSize: '1.6rem' }}
            >
              Here are different variants you can get. Choose the best option
              for you
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: 'auto', sm: 'none' } }}
          >
            {units.map(({ title, titleWithPrice }, index) => (
              <Button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                variant={selectedItemIndex === index ? 'contained' : 'outlined'}
                onClick={() => handleItemClick(index)}
                sx={{
                  textTransform: 'none',
                  borderRadius: '15px',
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? theme.palette.primary.dark
                        : '';
                    }
                    return selectedItemIndex === index
                      ? theme.palette.primary.dark
                      : '';
                  },
                  backgroundColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? theme.palette.primary.main
                        : '';
                    }
                    return selectedItemIndex === index
                      ? theme.palette.primary.main
                      : '';
                  },
                  '& .MuiButton-label': {
                    color: (theme) =>
                      selectedItemIndex === index
                        ? theme.palette.primary.contrastText
                        : '',
                    fontSize: '1rem',
                  },
                }}
              >
                {titleWithPrice || title}
              </Button>
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              component="img"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              src={selectedFeature.image}
              alt={`section image ${selectedFeature.title}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {units.map(({ icon, title }, index) => {
              return (
                <Card
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
                    backgroundColor:
                      selectedItemIndex === index
                        ? 'action.selected'
                        : undefined,
                    borderColor: (theme) => {
                      if (theme.palette.mode === 'light') {
                        return selectedItemIndex === index
                          ? theme.palette.primary.light
                          : 'grey.200';
                      }
                      return selectedItemIndex === index
                        ? theme.palette.primary.dark
                        : 'grey.800';
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      textAlign: 'left',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { md: 'center' },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        color: (theme) => {
                          if (theme.palette.mode === 'light') {
                            return selectedItemIndex === index
                              ? theme.palette.primary.main
                              : 'grey.300';
                          }
                          return selectedItemIndex === index
                            ? theme.palette.primary.main
                            : 'grey.700';
                        },
                      }}
                    >
                      {icon} {/* Render the icon here */}
                    </Box>
                    <Box sx={{ textTransform: 'none' }}>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight="bold"
                        fontSize="1.6rem"
                      >
                        {title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              component="img"
              src={selectedFeature.image}
              alt={`section image ${selectedFeature.title}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            component="div"
            variant="h6"
            dangerouslySetInnerHTML={{ __html: description }}
            sx={{
              // whiteSpace: 'pre-line',
              fontSize: '1.6rem',
              lineHeight: 1.6,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Accomodation;
