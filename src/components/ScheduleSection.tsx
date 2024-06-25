import React from 'react';
import { Chrono } from 'react-chrono';
import { Box, Container, Typography } from '@mui/material';

const dailySchedule = [
  {
    title: '6:00-7:00',
    cardTitle: 'Підйом та практика мовчання',
    cardDetailedText: 'Розпочніть день з мовчання та внутрішнього спокою.',
  },
  {
    title: '7:00-8:15',
    cardTitle: 'Ранкова медитація та час для чаю',
    cardDetailedText:
      'Медитація для налаштування на день та чай для пробудження.',
  },
  {
    title: '8:30-10:00',
    cardTitle: 'Заняття йогою та пранаямою (дихальна практика)',
    cardDetailedText:
      'Ранкове заняття йогою для пробудження тіла та пранаяма для свіжості розуму.',
  },
  {
    title: '10:00-11:00',
    cardTitle: 'Обмін думками та час для себе',
    cardDetailedText: 'Час для обміну думками та рефлексії.',
  },
  {
    title: '11:00-11:30',
    cardTitle: 'Бранч',
    cardDetailedText: 'Смачний та поживний бранч.',
  },
  {
    title: '11:30-16:30',
    cardTitle: 'Виїзна активна програма',
    cardDetailedText:
      'Похід, піші прогулянки, плавання в океані, дослідження околиць, екскурсія та вільний час.',
  },
  {
    title: '17:30-19:00',
    cardTitle: 'Вечірня йога та медитація/йога нідра',
    cardDetailedText: 'Заспокійлива вечірня йога та медитація або йога нідра.',
  },
  {
    title: '19:00-20:00',
    cardTitle: 'Вечеря',
    cardDetailedText: 'Поживна вечеря для відновлення енергії.',
  },
  {
    title: '20:00',
    cardTitle: 'Вільний час, вечірнє коло з чаєм',
    cardDetailedText: 'Час для спілкування та розслаблення за чашкою чаю.',
  },
  {
    title: '22:00',
    cardTitle: 'Час для сну',
    cardDetailedText: 'Час для відпочинку та відновлення.',
  },
];

function ScheduleSection() {
  return (
    <Container sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Приклад розкладу нашого дня
      </Typography>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Chrono
          disableToolbar
          disableNavOnKey
          scrollable
          enableBreakPoint
          verticalBreakPoint={400}
          items={dailySchedule}
          mode="VERTICAL_ALTERNATING"
        />
      </Box>
    </Container>
  );
}

export default ScheduleSection;
