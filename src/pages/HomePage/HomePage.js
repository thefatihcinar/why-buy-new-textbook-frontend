import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/* Components */
import { RecommendedPosts } from "../../components/Posts";
import { OurAims } from "../../components/OurAims";


const HomePage = () => {
    return (
        <Box sx={{ flexGrow: 1, margin: "1.25%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9} style={{ padding: '0.85rem'}}>
                    <RecommendedPosts/>
                </Grid>
                <Grid item xs={0} md={3}>
                    <OurAims/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
