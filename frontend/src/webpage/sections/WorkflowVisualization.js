// web/src/components/elements/WorkflowVisualization.js
import React, { useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WorkflowVisualization = () => {
  const videos = [
    {
      src: "/videos/vid1.mov",
      alt: "Scenario 1",
      caption: "Scenario 1",
    },
    {
      src: "/videos/vid2.mov",
      alt: "Scenario 2",
      caption: "Scenario 2",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', width: '100%', pt: 6, pb: 6 }}>
      <Box sx={{ position: 'relative', textAlign: 'center', mx: 'auto', maxWidth: { xs: '100%', md: '90%' } }}>
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
          Workflow Visualization
        </Typography>
        <video
          controls
          style={{
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {videos[currentIndex].caption}
        </Typography>
        <Box sx={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)' }}>
          <IconButton onClick={handlePrev} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ position: 'absolute', top: '50%', right: '-40px', transform: 'translateY(-50%)' }}>
          <IconButton onClick={handleNext} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkflowVisualization;
