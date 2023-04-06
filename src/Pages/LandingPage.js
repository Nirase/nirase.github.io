import { Box, Slide } from "@mui/material"
import Header from "../Components/Header/Header";
import InfoCard from "../Components/LandingPage/InfoCard";
import Carousel from 'react-material-ui-carousel'
import { useState } from "react";
import "../css/animations.css"
const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index) => {
        console.log("called", index);
        setCurrentIndex(index);
    };

    const items = [
        {
            image: "https://media.tenor.com/UvvgjxTnagUAAAAM/cat-meow.gif",
            name: "Kanvas",
            description: "Explore an abandoned world in this frozen landscape. Continue moving forward as the only things guiding you is the sound of the animals and the beauty of music.",
            tags: ['Unity', 'C#', 'Github', 'Music', 'Adventure', 'Exploration', 'Atmospheric'],
            url: ""
        }

        ,
        {
            image: "https://thumbs.gfycat.com/UnfinishedOccasionalIraniangroundjay-size_restricted.gif",
            name: "Rougelite",
            description: "Explore a procedurally generated world filled with unique and amazing monsters. Create the perfect team to fight against the wild enemies you encounter so that you can explore the world.",
            tags: ['Unity', 'C#', 'Github', 'Procedural Generation', 'RPG', 'Turn Based'],
            url: ""

        }
    ];
    const indicatorStyles = {
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        width: '100%',
        zIndex: 1,
    };

    const navButtonStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
    };


    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                indicatorContainerProps={{ style: indicatorStyles }}
                navButtonsContainerProps={{ style: navButtonStyles }}
                onChange={handleSlideChange}
                animation="slide"
                duration={800}
                interval={10000}
            >
                {items.map((bg, index) => (
                    <div key={index}
                        style={{
                            backgroundImage: `url("${bg.image}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100vw",
                            height: "100vh",
                            zIndex: 1
                        }}></div>
                ))}
            </Carousel>


            <div style={{ position: 'absolute', right: 0, top: 0, left: 0, zIndex: 1 }}>
                <Header />
            </div>
            <Box sx={{ width: 1 / 4, position: 'absolute', right: '20%', top: '30%', zIndex: 1 }}>
                <InfoCard name={items[currentIndex].name} tags={items[currentIndex].tags} description={items[currentIndex].description} url={items[currentIndex].url} />
            </Box>
        </div>
    );
};
export default LandingPage;