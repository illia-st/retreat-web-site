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
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

const includedItems = [
  'вся йога програма - як на віллі, так і за межами неї',
  'користування килимками, блоками та подушками для медитацій',
  'всі невиїзні активності',
  'проживання (постіль, рушники - ванні та пляжні)',
  'дворазове вегетаріанське харчування',
  'снеки та фрукти',
  'чайні церемонії',
  'професійні фото та контент протягом ретриту',
  'Wi-fi на віллі',
  'допомога у пошуку, купівлі квитків та надання інформації по острову та підготовці до поїздки',
  'підтримка та наставництво після ретриту',
  'спільнота однодумців',
];

const notIncludedItems = [
  'переліт (рекомендуємо прилетіти до Північного аеропорту Тенеріфе)',
  'трансфер з аеропорту до вілли (але можлива допомога із організацією групового трансферу)',
  'туристичне страхування',
  'витрати на особисті потреби',
  'прання - 2 євро за кожне, включаючи миючий засіб',
];

function IncludedSection() {
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
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center horizontally
                    textAlign: 'left', // Center text horizontally
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                    <CheckCircleRoundedIcon color="primary" />
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
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Що не входить у ціну
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {notIncludedItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center horizontally
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
