/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Link,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Telegram from '@mui/icons-material/Telegram';

const people = [
  {
    name: 'Вікторія Мицик',
    role: 'Universal Yoga Teacher RYT 300',
    instagram: 'https://www.instagram.com/oum_victory/',
    whatsApp: 'https://wa.me/798236967',
    avatar: '/soc_mt.png',
  },
  {
    name: 'Вікторія Чорножук',
    role: 'Traditional Hatha and Vinyasa Teacher RYT 200',
    instagram: 'https://www.instagram.com/vickydrum/',
    telegram: 'https://t.me/vickydrum',
    avatar: '/soc_ch.png',
  },
];

function SocialSection() {
  return (
    <Container sx={{ mt: 4, mb: 10 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Наші соціальні мережі
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {people.map((person, index) => (
          <Grid item xs={12} sm={6} key={index}>
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
                    flexDirection: 'column',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    src={person.avatar}
                    alt={person.name}
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                  <Typography variant="h6">{person.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.role}
                  </Typography>
                  <Link
                    href={person.instagram}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      mt: 2,
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <InstagramIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Follow on Instagram</Typography>
                  </Link>
                  <Link
                    href={person.whatsApp ? person.whatsApp : person.telegram}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      mt: 2,
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {person.whatsApp ? (
                      <WhatsApp sx={{ mr: 1 }} />
                    ) : (
                      <Telegram sx={{ mr: 1 }} />
                    )}
                    <Typography variant="body1">
                      Redirect to {person.whatsApp ? 'WhatsApp' : 'Telegram'}
                    </Typography>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SocialSection;
