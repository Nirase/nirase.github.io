

import {Box} from "@mui/material"
import Header from "../Components/Header/Header";
import InfoCard from "../Components/LandingPage/InfoCard";
const LandingPage = () => {

    const image = <img src="https://w7.pngwing.com/pngs/176/930/png-transparent-catgirl-anime-anime-mammal-cat-like-mammal-carnivoran.png"></img>
            
    return (
        <div style={{backgroundImage: `url("https://media.tenor.com/UvvgjxTnagUAAAAM/cat-meow.gif")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: 1000
        }}>
      <Header />

            <Box sx={{width: 1/4, position: 'absolute', right: '20%', top: '30%'}}>
                <InfoCard></InfoCard>
            </Box>
        </div>
    )
}

export default LandingPage;