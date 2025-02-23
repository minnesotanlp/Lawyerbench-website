// web/src/components/elements/PlatformSection.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const PlatformSection = () => {
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
          The Platform
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'text.secondary',
            mb: 3,
            textAlign: 'justify',
          }}
        >
          Our database captures real-world business entity formation scenarios, starting with a seed scenario provided by a local business. 
          Through conversations with the business owner, a lawyer initiates the legal process, meticulously documenting and 
          taking notes of each step—from initial discussions to formal filings. The process culminates in a finalized agreement document, 
          serving as the definitive legal outcome.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.1rem',
            textAlign: 'center',
            mb: 2,
            color: 'text.secondary',
            textAlign: 'justify',
          }}
        >
          Watch the demo video below to see it in action! 🚀
        </Typography>
        <Box
          sx={{
            position: 'relative',
            pb: '56.25%',
            pt: 2,
            height: 0,
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <video
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          >
            <source src="/videos/ToolVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'text.secondary',
            mb: 2,
            textAlign: 'justify',
          }}
        >
          How It Works:
        </Typography>
        <Box component="ul" sx={{ listStyleType: 'none', marginLeft: '0.8rem' }}>
          <li>
            📌 <strong>1. Log In</strong> – Secure access for authorized users.
          </li>
          <li>
            📌 <strong>2. Create a New Project & Invite Collaborators</strong> – Launch projects (e.g., "Spring 2025 Entity Formation") and add RAs or professors.
          </li>
          <li>
            📌 <strong>3. High-Level Planning Page</strong> – Visualize tasks/sub-tasks (44 total) in a node-based workflow with recommended sequences.
          </li>
          <li>
            📌 <strong>4. Features Page</strong> – Conduct Zoom calls, take notes, edit legal documents, and access research templates—all in one place.
          </li>
          <li>
            📌 <strong>5. Automatic Data Collection</strong> – Every action is logged in MongoDB, creating a foundation for analytics and future LLM training.
          </li>
        </Box>
      </Container>
    </Box>
  );
};

export default PlatformSection;
