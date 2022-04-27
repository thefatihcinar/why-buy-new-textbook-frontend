import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from "@mui/material";

const PostInRow = ( { post } ) => {
    if(!post) {
        post = {"_id":"626055fd688ed1fad9fff7bc","seller":"626055f8688ed1fad9fff795","isShippable":true,"isAvailableForFacetoFaceSelling":true,"price":225,"title":"Economics 6th edition pearson Hubbard","author":" Glenn Hubbard, Anthony O'Brien","mainImage":"https://i0.shbdn.com/photos/22/67/97/x5_983226797gai.jpg","relatedCity":"626055f6688ed1fad9fff756","relatedInstitution":"626055f6688ed1fad9fff78a","type":"Ders Kitabı","description":"For two-semester courses in Principles of Economics. The Relevance of Economics Through Real-world Business ExamplesOne of the challenges of teaching Principles of Economics is fostering interest in concepts that may not seem applicable to students' lives. Economics makes economics relevant by demonstrating how real businesses use economics to make decisions every day. And with an ever-changing U.S. and world economy, the Sixth Edition has been updated with the latest developments using new real-world business and policy examples. Regardless of their future career path-opening an art studio, trading on Wall Street, or bartending at the local pub-students will benefit from understanding the economic forces behind their work. MyEconLab (R) not included. Students, if MyEconLab is a recommended/mandatory component of the course, please ask your instructor for the correct ISBN and course ID. MyEconLab should only be purchased when required by an instructor. Instructors, contact your Pearson representative for more information.MyEconLab is an online homework, tutorial, and assessment product designed to personalize learning and improve results. With a wide range of interactive, engaging, and assignable activities, students are encouraged to actively learn and retain tough course concepts.","condition":"Sıfır","isApproved":true,"isDeleted":false,"isSold":false,"images":["https://i0.shbdn.com/photos/22/67/97/x5_983226797gai.jpg","https://i0.shbdn.com/photos/22/67/97/x5_983226797puv.jpg"],"starredBy":["626055fb688ed1fad9fff7a3","626055fc688ed1fad9fff7a7","626055f7688ed1fad9fff793","626055f8688ed1fad9fff797","626055fc688ed1fad9fff7a5","626055fa688ed1fad9fff79d","626055f8688ed1fad9fff795"],"__v":0,"createdAt":"2022-04-20T18:50:37.022Z","updatedAt":"2022-04-20T18:50:37.022Z"};
    }

    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 160, height: 160, margin: '1.75%'}}
                image={post.mainImage}
                alt={post.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {post.author}
                        </Typography>
                    </CardContent>
                    <Box sx={{ flex: '0 0 auto' }}>
                        <Typography variant="h5" color="text.secondary">
                            {post.price} TL
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '0 0 auto' }}>
                        <Typography variant="h5" color="text.secondary">
                            {post.createdAt.toLocaleString()}
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '0 0 auto' }}>
                        <Typography variant="h5" color="text.secondary">
                            {post.relatedCity}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ flex: '0 0 auto' }}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Yüz Yüze Satış" color="primary" />
                        <Chip label="Kargolanabilir" color="success" />
                        <Chip label="Ders Kitabı" color="primary" variant="outlined" />
                        <Chip label="Sıfır" color="success" variant="outlined" />
                    </Stack>
                </Box>
            </Box>

        </Card>
    );
}

export default PostInRow;
