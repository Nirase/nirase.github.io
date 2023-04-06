import { Card, CardContent, Typography, CardActions, Grid, Chip } from "@mui/material"
import Button from "@mui/material/Button"
import SellIcon from '@mui/icons-material/Sell';
import { alpha } from "@mui/material";
const InfoCard = () => {

    const tags = ['Unity', 'C#', 'Github', 'Music', 'Adventure', 'Exploration', 'Atmospheric']

    return (
        <Card sx={{ minWidth: 275, backgroundColor: alpha("#ffebee", 0.8)}}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    Kanvas
                </Typography>
                <Typography variant="body2">
                    Explore an abandoned world in this frozen landscape. Continue moving forward as the only things guiding you is the sound of the animals and the beauty of music.
                </Typography>
            </CardContent>

            <Grid container sx={{mb: 1.5, ml: 1.5}}>
                {tags.map(x => 
                        <Grid item xs={6} sx={{mb: 0.5}}>
                        <Chip
                            label={x}
                            icon={<SellIcon />}
                        />
                    </Grid>
                    )}
            </Grid>
                
                
            <CardActions>
                <Button size="small">View on Github</Button>
            </CardActions>

        </Card>
    )
}

export default InfoCard;