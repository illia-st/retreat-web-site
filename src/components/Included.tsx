/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  ListItemIcon,
  Divider,
  useTheme,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

const includedItems = [
  'Вся йога програма - як на віллі, так і за межами неї',
  'Користування килимками, блоками та подушками для медитацій',
  'Всі невиїзні активності',
  'Проживання (постіль, рушники - ванні та пляжні)',
  'Дворазове вегетаріанське харчування',
  'Снеки та фрукти',
  'Чайні церемонії',
  'Професійні фото та контент протягом ретриту',
  'Wi-fi на віллі',
  'Допомога у пошуку, купівлі квитків та надання інформації по острову та підготовці до поїздки',
  'Підтримка та наставництво після ретриту',
  'Спільнота однодумців',
];

const notIncludedItems = [
  'Переліт (рекомендуємо прилетіти до Північного аеропорту Тенеріфе)',
  'Трансфер з аеропорту до вілли (але можлива допомога із організацією групового трансферу)',
  'Туристичне страхування',
  'Витрати на особисті потреби',
  'Прання - 2 євро за кожне, включаючи миючий засіб',
];

function IncludedSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Що входить у вартість
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {includedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left', // Center horizontally
                    textAlign: 'left', // Center text horizontally
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                    <CheckCircleRoundedIcon htmlColor="#000" />
                  </ListItemIcon>
                  <Typography variant="subtitle1">{item}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function NotIncludedSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Що не входить у вартість
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {notIncludedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left', // Center horizontally
                    textAlign: 'left', // Center text horizontally
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                    <CloseIcon color="error" />
                  </ListItemIcon>
                  <Typography variant="subtitle1">{item}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Included() {
  return (
    <>
      <IncludedSection />
      <Divider />
      <NotIncludedSection />
    </>
  );
}

export default Included;
