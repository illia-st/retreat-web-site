import React from 'react';
import { Chrono } from 'react-chrono';
import { Box, Container, Typography, useTheme } from '@mui/material';

const dailySchedule = [
  {
    title: '6:00-7:00',
    cardTitle: 'Підйом та практика мовчання',
    cardSubtitle: 'Розпочніть день з мовчання та внутрішнього спокою.',
  },
  {
    title: '7:00-8:15',
    cardTitle: 'Ранкова медитація та час для чаю',
    cardSubtitle: 'Медитація для налаштування на день та чай для пробудження.',
  },
  {
    title: '8:30-10:00',
    cardTitle: 'Заняття йогою та пранаямою (дихальна практика)',
    cardSubtitle:
      'Ранкове заняття йогою для пробудження тіла та пранаяма для свіжості розуму.',
  },
  {
    title: '10:00-11:00',
    cardTitle: 'Обмін думками та час для себе',
    cardSubtitle: 'Час для обміну думками та рефлексії.',
  },
  {
    title: '11:00-11:30',
    cardTitle: 'Бранч',
    cardSubtitle: 'Смачний та поживний бранч.',
  },
  {
    title: '11:30-16:30',
    cardTitle: 'Виїзна активна програма',
    cardSubtitle:
      'Похід, піші прогулянки, плавання в океані, дослідження околиць, екскурсія та вільний час.',
  },
  {
    title: '17:30-19:00',
    cardTitle: 'Вечірня йога та медитація/йога нідра',
    cardSubtitle: 'Заспокійлива вечірня йога та медитація або йога нідра.',
  },
  {
    title: '19:00-20:00',
    cardTitle: 'Вечеря',
    cardSubtitle: 'Поживна вечеря для відновлення енергії.',
  },
  {
    title: '20:00',
    cardTitle: 'Вільний час, вечірнє коло з чаєм',
    cardSubtitle: 'Час для спілкування та розслаблення за чашкою чаю.',
  },
  {
    title: '22:00',
    cardTitle: 'Час для сну',
    cardSubtitle: 'Час для відпочинку та відновлення.',
  },
];

function ScheduleSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography id="scedule" variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Приклад розкладу нашого дня
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
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
            enableDarkToggle
            scrollable
            enableBreakPoint
            verticalBreakPoint={400}
            items={dailySchedule}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: theme.palette.primary.main,
              secondary: theme.palette.primary.contrastText,
              titleColor: theme.palette.primary.main,
              cardBgColor: theme.palette.primary.light,
              cardTitleColor: theme.palette.primary.contrastText,
            }}
            fontSizes={{
              cardSubtitle: '1.5rem',
              cardTitle: '1.75rem',
              title: '2rem',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default ScheduleSection;
