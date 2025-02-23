import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Button, Link as MuiLink } from '@mui/material';

const Header = () => {
  // Array of author objects
  const authors = [
    {
      name: 'Debarati Das',
      homepage: 'https://debaratidas94.github.io/',
      photo: '/images/deb.jpg',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Karin De Langis',
      homepage: 'https://karinjd.github.io/',
      photo: '/images/karin.png',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Khanh Chi Le',
      homepage: 'https://example.com/khanh',
      photo: '/images/khanh.png',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Ritik Parkar',
      homepage: 'https://example.com/ritik',
      photo: '/images/ritik.jpg',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Jong Inn Park',
      homepage: 'https://jong-inn.github.io/',
      photo: '/images/jong.png',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Dongyeop Kang',
      homepage: 'https://dykang.github.io/',
      photo: '/images/DK.jpg',
      affiliation: 'Computer Science & Engineering',
      affiliationLink: 'https://cse.umn.edu',
    },
    {
      name: 'Robin Willis',
      homepage: 'https://example.com/robin',
      photo: '/images/robin.jpg',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
    {
      name: 'Brendan Madson',
      homepage: 'https://www.linkedin.com/in/brendanmadson/',
      photo: '/images/brendan.png',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
    {
      name: 'Daniel Moses',
      homepage: 'https://example.com/daniel',
      photo: '/images/daniel.jpg',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
    {
      name: 'Chad Berryman',
      homepage: 'https://www.linkedin.com/in/chad-berryman-716145203/',
      photo: '/images/chad.png',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
    {
      name: 'Brett McDonnell',
      homepage: 'https://law.umn.edu/profiles/brett-mcdonnell',
      photo: '/images/brett.jpg',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
    {
      name: 'Daniel Schwarcz',
      homepage: 'https://www.law.umn.edu/profiles/daniel-schwarcz',
      photo: '/images/daniel-s.png',
      affiliation: 'Law School',
      affiliationLink: 'https://law.umn.edu',
    },
  ];

  // Split authors into two rows
  const half = Math.ceil(authors.length / 2);
  const firstRowAuthors = authors.slice(0, half);
  const secondRowAuthors = authors.slice(half);

  return (
    <>
      {/* ========================== 1) Header Section (White) ========================== */}
      <Box sx={{ backgroundColor: '#ffffff', pt: 6, pb: 4 }}>
        <Container maxWidth="md">
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.8rem', md: '4rem' },
                mb: 1,
                color: 'text.primary',
                letterSpacing: '-0.5px',
                textAlign: 'center',
              }}
            >
              LawyerBench: Collecting and Simulating Lawyers Thought Process
            </Typography>
            {/* ================= Authors Section with Photos, Names, and Affiliations ================= */}
            <Box sx={{ mt: 4 }}>
              {/* First row */}
              <Grid container spacing={2} justifyContent="center">
                {firstRowAuthors.map((author) => (
                  <Grid key={author.name} item xs={6} sm={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        alt={author.name}
                        src={author.photo}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                      />
                      <MuiLink
                        href={author.homepage}
                        underline="hover"
                        sx={{
                          display: 'block',
                          mt: 1,
                          fontWeight: 'bold',
                          color: 'primary.main',
                          fontFamily: 'Open Sans, sans-serif',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {author.name}
                      </MuiLink>
                      <MuiLink
                        href={author.affiliationLink}
                        underline="hover"
                        sx={{
                          display: 'block',
                          fontSize: '0.85rem',
                          color: 'text.secondary',
                          fontFamily: 'Open Sans, sans-serif',
                        }}
                      >
                        {author.affiliation}
                      </MuiLink>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* Second row */}
              <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {secondRowAuthors.map((author) => (
                  <Grid key={author.name} item xs={6} sm={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar
                        alt={author.name}
                        src={author.photo}
                        sx={{ width: 100, height: 100, margin: '0 auto' }}
                      />
                      <MuiLink
                        href={author.homepage}
                        underline="hover"
                        sx={{
                          display: 'block',
                          mt: 1,
                          fontWeight: 'bold',
                          color: 'primary.main',
                          fontFamily: 'Open Sans, sans-serif',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {author.name}
                      </MuiLink>
                      <MuiLink
                        href={author.affiliationLink}
                        underline="hover"
                        sx={{
                          display: 'block',
                          fontSize: '0.85rem',
                          color: 'text.secondary',
                          fontFamily: 'Open Sans, sans-serif',
                        }}
                      >
                        {author.affiliation}
                      </MuiLink>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* ================= Logos Section ================= */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, alignItems: 'center' }}>
                <Box component="a" href="https://nlplab.example.com" target="_blank" rel="noopener noreferrer">
                  <Box component="img" src="/images/nlp_lab_logo.png" alt="NLP Lab Logo" sx={{ width: 120, height: 'auto' }} />
                </Box>
                <Box component="a" href="https://lawschool.example.com" target="_blank" rel="noopener noreferrer">
                  <Box component="img" src="/images/oh_logo.png" alt="Law School Logo" sx={{ width: 200, height: 'auto' }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
