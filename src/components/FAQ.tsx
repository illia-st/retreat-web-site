/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const itemsToBring = [
  'сонцезахисні засоби та від опіків',
  'головні убори',
  'купальні костюми',
  'якщо у вас є бажання, рекомендуємо свій власний килимок',
  'особиста аптечка та все, що ви приймаєте. Але на острові є багато аптек',
  'зручний одяг для занять йогою',
  'трішки теплих речей у разі ранкових практик або ж біля океану (може бути трошки вітряно)',
  'зручне взуття для прогулянок у гори',
  'капці для будинку',
];

const thingsToKnow = [
  'погода. На початку листопада погода на острові, а особливо у нашій частині, може варіюватися від дуже теплої до прохолодної, наприклад вранці може бути 17-18 °C, але вдень піднімається до 22-23 °C. Часом можлива дещо вітряна погода.',
  'океан: температура океану на початку листопада 23-24 °C, пляжі у нашій частині переважно вулканічні галькові та піщані. Пляжі з золотим звичайним піском на Тенеріфе також присутні, але до них потрібно трішки проїхатися (найближчий до нас - це Playa de Las Teresitas, до якого їхати 45-55 хвилин)',
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Питання що часто задаються
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Які речі із собою брати?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {itemsToBring.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Що варто знати перед ретритом?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {thingsToKnow.map((thing, index) => (
              <Typography
                key={index}
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                {thing}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Що робити після залишення заявки?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Ми з вами зв&apos;яжемось якомога швидше, щоб уточнити всі деталі
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
