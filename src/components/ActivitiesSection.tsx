import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  ListItemIcon,
  styled,
} from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import HikeIcon from '@mui/icons-material/Terrain';

const activities = [
  {
    icon: <BeachAccessIcon htmlColor="#000" />,
    title: 'Похід на пляж',
    description: 'У пішій доступності поряд із віллою є багато пляжів.',
  },
  {
    icon: <BeachAccessIcon htmlColor="#000" />,
    title: 'Купання в океані',
    description: 'На початку листопада середня температура води 23 °C.',
  },
  {
    icon: <HikeIcon htmlColor="#000" />,
    title: 'Виїзна екскурсія та хайк до вулкану Тейде',
    description: 'Висота вулкану 3700 м, найвища точка Іспанії.',
  },
  {
    icon: <HikeIcon htmlColor="#000" />,
    title: '2-3х годинний похід у гори',
    description: 'Поблизу нашого містечка.',
  },
  {
    icon: <HikeIcon htmlColor="#000" />,
    title: 'Виїзний хайк до ущілини Маска або Національного парку Анага',
    description: 'Неймовірні види та природа.',
  },
  {
    icon: <LocalActivityIcon htmlColor="#000" />,
    title: 'Знайомство із місцевою культурою та їжею',
    description: 'Спробуйте місцеві страви та дізнайтесь більше про культуру.',
  },
];

const ActivityCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: '16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

function ActivitiesSection() {
  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography
        id="activities"
        variant="h2"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Які додаткові активності ми робитимемо (дещо оплачується окремо)
      </Typography>
      <Grid container spacing={4}>
        {activities.map((activity, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ActivityCard elevation={3}>
              <Box
                display="flex"
                alignItems="center"
                mb={2}
                sx={{ backgroundColor: 'primary.main' }}
              >
                <ListItemIcon>{activity.icon}</ListItemIcon>
                <Typography variant="h6">{activity.title}</Typography>
              </Box>
              <Typography variant="body1">{activity.description}</Typography>
            </ActivityCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ActivitiesSection;
