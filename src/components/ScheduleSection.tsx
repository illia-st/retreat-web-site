import React from 'react';
import { Chrono } from 'react-chrono';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import '../css/chrono.css';

// const dailySchedule = [
//   {
//     title: '6:00-7:00',
//     cardTitle: 'Підйом та практика мовчання',
//     cardSubtitle: 'Розпочніть день з мовчання та внутрішнього спокою.',
//   },
//   {
//     title: '7:00-8:15',
//     cardTitle: 'Ранкова медитація та час для чаю',
//     cardSubtitle: 'Медитація для налаштування на день та чай для пробудження.',
//   },
//   {
//     title: '8:30-10:00',
//     cardTitle: 'Заняття йогою та пранаямою (дихальна практика)',
//     cardSubtitle:
//       'Ранкове заняття йогою для пробудження тіла та пранаяма для свіжості розуму.',
//   },
//   {
//     title: '10:00-11:00',
//     cardTitle: 'Обмін думками та час для себе',
//     cardSubtitle: 'Час для обміну думками та рефлексії.',
//   },
//   {
//     title: '11:00-11:30',
//     cardTitle: 'Бранч',
//     cardSubtitle: 'Смачний та поживний бранч.',
//   },
//   {
//     title: '11:30-16:30',
//     cardTitle: 'Виїзна активна програма',
//     cardSubtitle:
//       'Похід, піші прогулянки, плавання в океані, дослідження околиць, екскурсія та вільний час.',
//   },
//   {
//     title: '17:30-19:00',
//     cardTitle: 'Вечірня йога та медитація/йога нідра',
//     cardSubtitle: 'Заспокійлива вечірня йога та медитація або йога нідра.',
//   },
//   {
//     title: '19:00-20:00',
//     cardTitle: 'Вечеря',
//     cardSubtitle: 'Поживна вечеря для відновлення енергії.',
//   },
//   {
//     title: '20:00',
//     cardTitle: 'Вільний час, вечірнє коло з чаєм',
//     cardSubtitle: 'Час для спілкування та розслаблення за чашкою чаю.',
//   },
//   {
//     title: '22:00',
//     cardTitle: 'Час для сну',
//     cardSubtitle: 'Час для відпочинку та відновлення.',
//   },
// ];

const dailySchedule = [
  {
    title: 'Arrival Day',
    cardTitle: `• 5:00 PM: welcome circle
      • 5:30 PM: Yoga practice- all body balance 
      • 7:00 PM: Group Dinner
      • 8:00PM: masala tee, reflection circle`,
    cardSubtitle: '',
  },
  {
    title: 'Saturday',
    cardTitle: `• 7:00AM: morning meditation 
      • 7:45AM: yoga - Accent power 
      • 9:00AM: Breakfast
      • 11:00 AM: Hiking in silence(partway) 
      • 1:30 PM: Picnic in nature 
      • 4:00 PM: Tee ceremony 
      • 5:00 PM: Yoga-accent flexibility + yoga Nidra with Singing bowls 
      • 7:00 PM: Group Dinner
      • 8:00PM: masala tee, reflection circle`,
    // cardTitle: '',
  },
  {
    title: 'Sunday',
    cardTitle: `• 7:00 morning meditation (optional)
      • 8:00 AM: Final Yoga Flow
      • 9:00 AM: Course Conclusion
      • 9:30 AM: Breakfast, Check-Out (11:00 AM), and Departure`,
    // cardTitle: '',
  },
];

function ScheduleSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography id="scedule" variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Our Schedule
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <Chrono
            borderLessCards
            cardHeight={100}
            disableTimelinePoint
            disableClickOnCircle
            disableToolbar
            disableNavOnKey
            disableInteraction
            scrollable
            enableBreakPoint
            verticalBreakPoint={400}
            items={dailySchedule}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: theme.palette.primary.main,
              titleColor: theme.palette.primary.main,
              cardBgColor: '#f0f0f0',
              cardTitleColor: '#000',
            }}
            fontSizes={{
              cardSubtitle: '1.5rem',
              cardTitle: '1.75rem',
              title: '2rem',
            }}
            classNames={{
              card: 'my-card',
              cardMedia: 'my-card-media',
              cardSubTitle: 'chrono-card-title',
              cardText: 'my-card-text',
              cardTitle: 'chrono-card-title',
              controls: 'my-controls',
              title: 'my-title',
            }}
          />
          <Typography
            variant="h5"
            sx={{ ml: isXs ? 0 : 15, mr: isXs ? 0 : 15, mt: isXs ? 10 : null }}
          >
            The schedule may gently adapt to the flow, but we hold a clear
            intention to stay aligned with it.
          </Typography>
          <Typography
            variant="h5"
            sx={{ ml: isXs ? 0 : 15, mr: isXs ? 0 : 15, mt: isXs ? 3 : null }}
          >
            We look forward to sharing this journey with you.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ScheduleSection;
