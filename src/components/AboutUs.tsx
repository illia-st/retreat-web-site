/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const teamMembers = [
  {
    name: 'Вікторія Мицик',
    title: 'Universal Yoga Teacher RYT 300',
    description: `
      Із йогою познайомилась більше 10 років тому ще в шкільному віці, і з того часу вона впливає і продовжує впливати на мене та моє життя. 
      Викладаю з 2020, не раз була учасником і вела майстер-класи на різних йога-фестивалях та благодійних заходах. 
      Сертифікований Астрокоуч. 
      «Для мене йога це не тільки фізична практика, а й інструмент пізнання внутрішнього й зовнішнього світу» 
      У мене серйозний підхід до практики йоги, який прокачує статичну та динамічну силу, гнучкість та баланс. 
      Моє хобі - це чай та чайні церемонії, з якими я вас познайомлю на нашому ретриті.
    `,
    images: [
      '/mz1.jpg',
      // '/mz2.jpg',
      // '/mz3.jpg',
      // '/mz4.jpg',
      // '/mz5.jpg',
      '/mz6.jpg',
    ],
  },
  {
    name: 'Вікторія Чорножук',
    title: 'Traditional Hatha and Vinyasa teacher RYT 200',
    description: `
      Познайомилася з йогою майже 10 років тому, але неймовірно закохана в неї та практикую із 2020. 
      У своєму викладанні я поєдную різні стилі йоги та медитації, приділяючи значну увагу Універсальній йозі. 
      Я вірю, що моє викладання приносить у життя людей більше доброти, внутрішньої сили, миру та радості. 
      Наразі я розширюю свій досвід та знання, вивчаючи Джйотіш (ведичну) астрологію, додаючи ще один інструмент до свого холістичного підходу в роботі із різними оболонками - як ментальною, так і фізичною. 
      Мої заспокійливі сеанси йоги-нідри допоможуть вам глибоко фізично розслабитися, зберігаючи розум на фокусі ваших відчуттів, що приведе вас до справжнього розслаблення тіла та розуму.
    `,
    images: ['/Chz_Vika2.JPG', '/Chz_Vika1.JPG'],
  },
];

function AboutUs() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Про нас
      </Typography>
      {teamMembers.map((member, index) => (
        <Grid container spacing={4} key={index} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Carousel showThumbs={false} infiniteLoop>
              {member.images.map((image, imgIndex) => (
                <Box
                  key={imgIndex}
                  component="img"
                  src={image}
                  alt={`${member.name} ${imgIndex + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              {member.name}
            </Typography>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              {member.title}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {member.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default AboutUs;
