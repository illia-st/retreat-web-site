/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Interface for the FAQ component props
export interface FAQInterface {
  title: string;
  items: {
    title: string;
    subItems: string[];
  }[];
}

export default function FAQ({ title, items }: FAQInterface) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
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
        id="faq"
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        {title}
      </Typography>
      <Box sx={{ width: '100%' }}>
        {items.map((item, index) => {
          const panelId = `panel${index + 1}`; // Dynamic panel ID
          return (
            <Accordion
              key={index}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              sx={{ backgroundColor: 'primary.main' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
                sx={{ color: 'primary.contrastText' }}
              >
                <Typography
                  component="h3"
                  variant="subtitle2"
                  sx={{ color: 'primary.contrastText' }}
                  fontSize="1.75rem"
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.subItems.map((subItem, subIndex) => (
                  <Typography
                    key={subIndex}
                    variant="body2"
                    fontSize="1.6rem"
                    gutterBottom
                    sx={{
                      maxWidth: { sm: '100%', md: '70%' },
                      color: 'primary.contrastText',
                    }}
                  >
                    {subItem}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}
