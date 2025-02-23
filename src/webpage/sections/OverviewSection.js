// web/src/components/elements/OverviewSection.js
import React, { useState } from 'react';
import { Typography, Box, IconButton, Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OverviewGallery = () => {
  const images = [
    { src: '/images/projDiagram.png', alt: 'Project Diagram' },
    { src: '/gifs/IntroGif.gif', alt: 'Platform Tool Work Demo' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', mt: 4 }}>
      <Box
        component="img"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        sx={{
          maxWidth: '100%',
          width: { xs: '100%', md: '70%' },
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          mx: 'auto',
        }}
      />
      <Box sx={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        <IconButton onClick={handlePrev} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)' }}>
        <IconButton onClick={handleNext} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};


const OverviewSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', width: '100%', pt: 6, pb: 6 }}>
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
          Overview
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          <Box component="li" sx={{ mb: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'justify',
              }}
            >
              LawyerBench is revolutionizing legal AI by navigating lawyer&apos;s thought process in the entire business entity formation process—from client consultations to customer interaction to note taking to drafting and filing legal documents. The collected process data will be used for training a cutting-edge Legal LLM Agent that navigates the entirety of legal tasks and assists lawyers in their legal processing with much less cognitive burdens.
            </Typography>
          </Box>
          <Box component="li">
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'justify',
              }}
            >
              A groundbreaking collaboration between our NLP lab and the Law School, this project doesn’t just automate legal workflows; it builds a rich dataset to fuel the next generation of AI-powered legal reasoning. By blending deep legal expertise with advanced AI technologies, we’re shaping the future of intelligent, accountable, and efficient legal automation.
            </Typography>
          </Box>
        </Box>
        <OverviewGallery />
      </Container>
    </Box>
  );
};

export default OverviewSection;
