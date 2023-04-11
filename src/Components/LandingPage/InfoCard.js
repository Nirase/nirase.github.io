import { Card, CardContent, Typography, CardActions, Grid, Chip } from "@mui/material"
import Button from "@mui/material/Button"
import SellIcon from '@mui/icons-material/Sell';
import { alpha } from "@mui/material";
const InfoCard = (props) => {
    return (
        <Card sx={{ minWidth: "40vw", minHeight: "40vh", backgroundColor: alpha("#ffebee", 0.8) }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                    {props.name}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
                <br/>
                <Typography variant="body2">
                    {props.myRole}
                </Typography>
            </CardContent>


            <CardActions>
                <Button size="small">View on Github</Button>
            </CardActions>

            <div style={{ marginLeft: 2 }}>
                {props.tags.map(x =>
                    <Chip
                        label={x}
                        icon={<SellIcon />}
                        sx={{ ml: 0.2, mb: 0.2 }}
                    />
                )}
            </div>
        </Card>
    )
}

export default InfoCard;