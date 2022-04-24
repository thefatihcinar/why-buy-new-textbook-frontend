import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/* Components */
import { RecommendedPosts } from "../../components/Posts";
import { OurAims } from "../../components/OurAims";


const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={0} md={3}>
                    <p>AMAÇLARIMIZ</p>
                    <OurAims/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <RecommendedPosts/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
