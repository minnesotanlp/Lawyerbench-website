import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab } from '@mui/material';

const sampleAgreements = [
  {
    promptPdf: "/docs/Prompt1.pdf",
    intermediateGif: "/gifs/Trans1.gif",
    outputPdf: "/docs/OA1.pdf",
  },
  {
    promptPdf: "/docs/Prompt2.pdf",
    intermediateGif: "/gifs/Trans2.gif",
    outputPdf: "/docs/OA2.pdf",
  },
];

const AgreementExample = ({ sample }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newValue) => setTabIndex(newValue);
  const contentHeight = '500px'; // Each tab content area is fixed to 500px

  return (
    <Box
      sx={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        p: 2,
      }}
    >
      {/* Individual Tabs Header */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ mb: 2 }}
      >
        <Tab label="Lawyer's Memo" />
        <Tab label="Seed Scenario" />
        <Tab label="Final Operating Agreement" />
      </Tabs>

      {/* Tab Content */}
      {tabIndex === 1 && (
        <Box sx={{ height: contentHeight }}>
          <Box
            component="iframe"
            src={sample.promptPdf}
            title="Input Prompt"
            sx={{
              width: '100%',
              height: contentHeight,
              border: 'none',
            }}
          />
        </Box>
      )}

      {tabIndex === 0 && (
        <Box
          sx={{
            height: contentHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={sample.intermediateGif}
            alt="Intermediate Transformation"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      )}

      {tabIndex === 2 && (
        <Box sx={{ height: contentHeight }}>
          <Box
            component="iframe"
            src={sample.outputPdf}
            title="Final Operating Agreement"
            sx={{
              width: '100%',
              height: contentHeight,
              border: 'none',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

const SampleOperatingAgreement = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', width: '100%', pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
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
          Generated Operating Agreements
        </Typography>
        <Typography
          variant="body1"
          align="left"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'text.secondary',
            mb: 4,
            textAlign: 'justify',
          }}
        >
          Our database captures real-world business entity formation scenarios, starting with a seed scenario provided by a local business. Through conversations with the business owner, a lawyer initiates the legal process, meticulously documenting and taking notes of each step—from initial discussions to formal filings. The process culminates in a finalized agreement document, serving as the definitive legal outcome.
        </Typography>

        {/* Display two examples side by side */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {sampleAgreements.map((sample, idx) => (
            <Box key={idx} sx={{ flex: 1, minWidth: '300px' }}>
              <AgreementExample sample={sample} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SampleOperatingAgreement;
