// web/src/components/elements/DatasetCard.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export const JsonPreviewCard = () => {
  const sampleJson = `{
    "project_name": "September14",
    "task_name": "Ask Default Questions",
    "metadata": {
      "action": "note taking",
      "activity_type": "notes_change",
      "timestamp": "2024-09-18T16:07:03.646+00:00",
      "content": "<p>Asking open ended questions about nature of the business and their desires</p><p><br></p><p>Chad: two clients are friends from college that share an interest in food and cooking. Chad owns a food trailer and they have already began a taco food truck business wi</p>"
    }
  }`;

  let jsonData;
  try {
    jsonData = JSON.parse(sampleJson);
  } catch (e) {
    return <div>Error parsing JSON</div>;
  }

  const getBackgroundColor = (indent, idx) => {
    if (indent === 0) {
      return idx % 2 === 0 ? 'white' : '#f5f5f5';
    } else {
      return idx % 2 === 0 ? '#f0f8ff' : '#e6f2ff';
    }
  };

  const renderJSON = (data, indent = 0) => {
    if (typeof data !== 'object' || data === null) {
      if (typeof data === 'number') {
        return <span style={{ color: 'blue' }}>{data}</span>;
      } else if (typeof data === 'string') {
        return <span style={{ color: '#006400' }}>{`"${data}"`}</span>;
      } else {
        return <span>{String(data)}</span>;
      }
    }

    if (Array.isArray(data)) {
      return (
        <span>
          [ {data.map((item, idx) => (
            <span key={idx}>
              {renderJSON(item, indent + 1)}
              {idx < data.length - 1 ? ', ' : ''}
            </span>
          ))} ]
        </span>
      );
    }

    return (
      <div style={{ marginLeft: indent * 20 }}>
        {'{'}
        {Object.entries(data).map(([key, value], idx, arr) => (
          <Box
            key={key}
            sx={{
              backgroundColor: getBackgroundColor(indent, idx),
              '&:hover': { backgroundColor: indent === 1 ? '#fff2b2' : '#ffffcc' },
              padding: '2px 4px',
            }}
          >
            <span style={{ color: 'red' }}>"{key}"</span>: {renderJSON(value, indent + 1)}
            {idx < arr.length - 1 ? ',' : ''}
          </Box>
        ))}
        {'}'}
      </div>
    );
  };

  return (
    <Box
      sx={{
        maxHeight: '400px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        p: 2,
      }}
    >
      {renderJSON(jsonData)}
    </Box>
  );
};

const DatasetCard = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', width: '100%', pt: 6, pb: 6 }}>
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
          Dataset Card
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
          We collected data from real tasks; here’s a sample from the dataset:
        </Typography>
        <JsonPreviewCard />
      </Container>
    </Box>
  );
};

export default DatasetCard;
