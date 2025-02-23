// web/src/components/DataInsights.js
import React, { useState } from 'react';
import { Typography, Container, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DataInsightsGallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', mt: 4 }}>
      {/* Research Question */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontFamily: 'Open Sans, sans-serif' }}
      >
        {slides[currentIndex].researchQuestion}
      </Typography>
      {/* Large Image */}
      <Box
        component="img"
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
        sx={{
          maxWidth: '100%',
          width: { xs: '100%', md: '70%' },
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      />
      {/* Insights as Bullet Points */}
      {/* Insights as Bullet Points */}
      {/* Insights as Bullet Points */}
      <Box
        sx={{
          textAlign: 'center',
          width: { xs: '100%', md: '70%' },
          mx: 'auto',
          mt: 2,
        }}
      >
        <ul style={{ paddingLeft: '1rem', margin: 0 }}>
          {slides[currentIndex].insights.map((point, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '1.2rem',
                  textAlign: 'justify',
                }}
              >
                {point}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>


      {/* Navigation Arrows */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton
          onClick={handleNext}
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const DataInsights = () => {
  const slides = [
    {
      researchQuestion: "Is the time distribution across subtasks consistent among different law RAs?",
      src: "/images/dataInsights1.png",
      alt: "Data Insights Slide 1",
      insights: [
        "There is a consistent pattern across the four law RAs, with more than 50% of their time dedicated to \
        Subtask 1: Gather Basic Information, and around 10–20% allocated to Subtask 2: \
        Decide on recommendation to cline(s). Subtasks\
         3: Send memo and Subtask 4: Write an Operating Agreement each account for less than 20%, \
        while Tax Treatment takes up less than 5% of the total time.", 
        "There is minimal variation among projects for each law RA, except for Law RA 3, who shows notable differences."
      ],
    },
    {
      researchQuestion: "Is the time distribution across nodes consistent among different law RAs?",
      src: "/images/dataInsights2.png",
      alt: "Data Insights Slide 2",
      insights: [
        "There are large variations among each law RAs and differences across each law RA. "
      ],
    },
    {
      researchQuestion: "What is the order in which law RAs complete their subtasks? Does it align with the predefined diagram?",
      src: "/images/dataInsights3.png",
      alt: "Data Insights Slide 3",
      insights: [
        "Law RA 1 and Law RA 2 follow the order specified in the diagram. Interestingly, before writing the memo or Operating Agreement (OA), they often revisit Subtask 1: Gather Basic Information to refresh their understanding of the client’s details.",
        "Law RA 3 and Law RA 4, however, tend to work on Subtask 1 and Subtask 2 interchangeably.",
        "Another observed pattern, which the law RAs confirmed, is that they typically begin Subtask 3: Send Memo to Client only after working on Subtask 4: Write an Operating Agreement for a while.",
      ],
    },
    {
      researchQuestion: "What is the order in which law RAs complete their subtasks? Does it align with the predefined diagram?",
      src: "/images/dataInsights4.png",
      alt: "Data Insights Slide 4",
      insights: [
        "Law RA 1 and Law RA 2 switch between interactive, observable, and introspective subtasks, frequently alternating between different types.",
        "In contrast, Law RA 3 and Law RA 4 tend to focus on one type of subtask at a time before moving on to the next. They only focus on observable tasks or introspective tasks at a time."
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        width: '100%',
        pt: 6,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            mb: 3,
            color: 'text.primary',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Data Insights
        </Typography>
        <DataInsightsGallery slides={slides} />
      </Container>
    </Box>
  );
};

export default DataInsights;
