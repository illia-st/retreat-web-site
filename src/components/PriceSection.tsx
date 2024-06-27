import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks3Icon from '@mui/icons-material/Looks3';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Filter2Icon from '@mui/icons-material/Filter2';

const items = [
  {
    icon: <Looks4Icon />,
    title: 'Проживання у 4-місній кімнаті',
    titleWithPrice: 'Проживання у 4-місній кімнаті 1099 € (до 11.07)',
    price: 'Early bird (до 11.07) 1099 €',
    image: '/retreat-web-site/4place-standart.jpg',
  },
  {
    icon: <Looks3Icon />,
    title: 'Проживання у 3-місній кімнаті',
    titleWithPrice: 'Проживання у 3-місній кімнаті 1129 € (до 11.07)',
    price: 'Early bird (до 11.07) 1129 €',
    image: '/retreat-web-site/3place-standart.jpg',
  },
  {
    icon: <LooksTwoIcon />,
    title: 'Проживання у 2-місній кімнаті',
    titleWithPrice: 'Проживання у 2-місній кімнаті 1149 € (до 11.07)',
    price: 'Early bird (до 11.07) 1149 €',
    image: '/retreat-web-site/2place_standart.jpg',
  },
  {
    icon: <Filter2Icon />,
    title: 'Проживання у покращеній 2-місній кімнаті',
    titleWithPrice:
      'Проживання у покращеній 2-місній кімнаті 1159 € (до 11.07)',
    price: 'Early bird (до 11.07) 1159 €',
    image: '/retreat-web-site/2place_better.jpg',
  },
];

export default function PriceSection() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="price" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Вартість тура
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Ось ціни на різні варіанти проживання під час нашого ретриту.
              Оберіть найкращий для вас варіант.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: 'auto', sm: 'none' } }}
          >
            {items.map(({ titleWithPrice }, index) => (
              <Chip
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                label={titleWithPrice}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor:
                    selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#000' : '',
                  },
                }}
              />
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
            {items.map(({ icon, title, price }, index) => (
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
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index
                      ? 'primary.dark'
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
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {price}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            style={{
              marginBottom: '1rem',
              fontWeight: 'lighter',
            }}
          >
            • Депозит-бронь 300 €, який не повертається (гроші повертаються
            тільки за умови, якщо ретрит скасовано з нашої боку)
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'lighter' }}>
            • Можлива оплата частинами через будь-яку зручну для вас платіжну
            систему
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
