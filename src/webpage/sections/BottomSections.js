// web/src/components/elements/bottomSections.js
// This component is used to render the bottom sections of the webpage, specifically the Call for Participation, Citation, and Footer Sections.
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const CallForParticipation = () => (
  <Box sx={{ backgroundColor: '#ffffff', width: '100%', pt: 4, pb: 6 }}>
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
        Call for Participation
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          textAlign: 'justify',
        }}
      >
        We welcome collaborators, funders, and researchers interested in exploring large language models for real-world legal tasks. If you’d like to try our tool or contribute to our dataset, please get in touch!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.1rem',
            color: 'text.secondary',
            textAlign: 'justify',
          }}
        >
          Contact us at <strong>XXX@umn.edu</strong>
        </Typography>
      </Box>
    </Container>
  </Box>
);

const CitationSection = () => (
  <Box sx={{ backgroundColor: '#f5f5f5', width: '100%', pt: 4, pb: 6 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          mb: 3,
          color: 'text.primary',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        Citation
      </Typography>
      <Box
        component="pre"
        sx={{
          backgroundColor: '#fafafa',
          padding: 2,
          borderRadius: '8px',
          overflowX: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
        }}
      >
        {`@inproceedings{das2025lawyerbench,
  title={LawyerBench: Collecting and Simulating Lawyers Thought Process},
  author={Das, Debarati and De Langis, Karin and Le, Khanh Chi and Parkar, Ritik and Madson, Brendan and Moses, Daniel and Willis, Robin and Berryman, Chad and McDonnell, Brett and Schwarcz, Daniel and Kang, Dongyeop},
  booktitle={Conference on Legal AI},
  year={2025},
  organization={University of Minnesota}
}`}
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box sx={{ backgroundColor: '#ffffff', py: 2 }}>
    <Container maxWidth="md">
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '0.9rem',
          color: 'text.secondary',
          textAlign: 'center',
        }}
      >
        © 2021-2025 Minnesota NLP & University of Minensota. All Rights Reserved
      </Typography>
    </Container>
  </Box>
);

const BottomSections = () => (
  <>
    <CallForParticipation />
    <CitationSection />
    <Footer />
  </>
);

export default BottomSections;
