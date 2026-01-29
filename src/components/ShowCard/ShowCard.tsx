import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from '@mui/material';
import type {ITvShow} from '../../types';

interface Props {
    show: ITvShow;
}

const ShowCard: React.FC<Props> = ({ show }) => {
    return (
        <Card sx={{ display: 'flex', mt: 3, boxShadow: 3, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                sx={{ width: 250, objectFit: 'cover' }}
                image={show.image}
                alt={show.name}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent>
                    <Typography component="h2" variant="h4" gutterBottom>
                        {show.name}
                    </Typography>

                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Network: {show.network}
                    </Typography>


                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        {show.genres.map((genre) => (
                            <Chip key={genre} label={genre} size="small" variant="outlined" />
                        ))}
                    </Stack>

                    <Typography variant="body1" color="text.secondary" component="div">
                        <div
                            dangerouslySetInnerHTML={{ __html: show.summary || 'No description available.' }}
                            style={{
                                lineHeight: '1.6',
                                textAlign: 'justify'
                            }}
                        />
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ShowCard;