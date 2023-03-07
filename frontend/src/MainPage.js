import React from 'react';
import './MainPage.css';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function MainPage() {
    return (
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
                            color = "text.primary"
                            gutterBottom>
                            Match.io
                        </Typography>
                        <Typography
                            variant="h5"
                            align = "center"
                            color = "text.secondary"
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
        
    );
}

export default MainPage;