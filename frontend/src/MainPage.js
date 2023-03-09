import React from 'react';
import './MainPage.css';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { blue } from '@mui/material/colors';

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#212121',
        },
        primary: {
          light: '#757ce8',
          main: '#1b5e20',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#e0e0e0',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
  });

function MainPage() {
    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className = "MainPage">
            <Box 
                sx={{
                    bgcolor: 'primary.white',
                    pt: 8,
                    pb: 6,
                }}>
                <Container maxWidth="sm">
                        <Typography
                            component= "h1"
                            variant= "h2"
                            align = "center"
                            color = "common.white"
                            fontWeight = "bold"
                            gutterBottom>
                            Match.io
                        </Typography>
                        <Typography
                            variant="h5"
                            align = "center"
                            color = "secondary.main"
                            paragraph>
                            Want to find a friend but don't know how to? Tired of the old search bar, or simply don't have anyone to look up? 
                            Well don't you worry! 
                            Introducing Match.io! Colaborate in a space with other friend-seeking individuals and experience your first Match.
                        </Typography>
                </Container>
                <Stack
                    sc={{
                        pt: 4
                    }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant='contained'>sign in</Button>
                </Stack>
            </Box>
        </div>
        </ThemeProvider>
        
    );
}

export default MainPage;