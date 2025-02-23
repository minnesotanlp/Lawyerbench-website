// EntityFormationWorkflow.js
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const galleryItems = [
  {
    src: "/images/MainTasks.png",
    alt: "Main Tasks Diagram",
    caption: "Main Tasks Diagram",
    width: { xs: '90%', md: '55%' },
  },
  {
    src: "/images/TaskSubtask.png",
    alt: "Sub-Task Diagram",
    caption: "Sub-Task Diagram",
    width: { xs: '90%', md: '40%' },
  },
];

const GalleryView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', mb: 4, px: 2 }}>
      <Box
        component="img"
        src={currentItem.src}
        alt={currentItem.alt}
        sx={{
          width: currentItem.width,
          maxWidth: '100%',
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          mx: 'auto',
        }}
      />
      <Typography variant="caption" sx={{ display: 'block', fontWeight: 'bold', mt: 1 }}>
        {currentItem.caption}
      </Typography>
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

const EntityFormationWorkflow = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        width: '100%',
        pt: 6,
        pb: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ px: 2 }}>
        {/* Section Title */}
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            mb: 3,
            color: 'text.primary',
            fontSize: '2rem',
          }}
        >
          Entity Formation Workflow
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.1rem',
            mb: 4,
            textAlign: 'justify',
          }}
        >
          The higher-level planning stage is visualized within our tool, as demonstrated in the GIF below, allowing users to navigate workflows with precision and ease. 🚀
        </Typography>

        {/* GIF */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            component="img"
            src="/gifs/EntityGif.gif"
            alt="Diagram inside the tool"
            sx={{
              maxWidth: '800px',
              width: '100%',
              height: 'auto',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
        </Box>

        {/* Explanatory text */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: 'text.secondary',
            textAlign: 'justify',
            mb: 3,
          }}
        >
          Our business entity formation process is structured into five major tasks, each representing a crucial phase of legal workflow. 
          Within each task, multiple sub-tasks break down the process into manageable, actionable steps.<p></p>
          
          For instance, a task like “Gather Client Information” includes sub-tasks such as note-taking, gap analysis, 
          and targeted searches—all seamlessly integrated within our node-based structure. 
          This structured approach ensures clarity, efficiency, and consistency across every stage of the legal process.
        </Typography>

        <GalleryView />

      </Container>
    </Box>
  );
};

export default EntityFormationWorkflow;
