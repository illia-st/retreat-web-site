import React, { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';

interface ArrivalInfo {
  title: string;
  content: string[];
}

interface TransportInfoProps {
  data: ArrivalInfo[];
}

function TransportInfo({ data }: TransportInfoProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container sx={{ py: { xs: 6, sm: 12 } }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        How to get to the property?
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="arrival methods tabs"
          sx={{ mb: 3 }}
        >
          {data.map((item, index) => (
            <Tab
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              label={item.title}
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: activeTab === index ? 'bold' : 'normal',
              }}
            />
          ))}
        </Tabs>

        {/* Content */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '800px',
            p: 3,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {data[activeTab].content.map((paragraph, idx) => (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: '1rem' }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default TransportInfo;
