import { Box, Slide } from "@mui/material"
import Header from "../Components/Header/Header";
import InfoCard from "../Components/LandingPage/InfoCard";
import Carousel from 'react-material-ui-carousel'
import { useState } from "react";
import "../css/animations.css"
const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    const items = [
        {
            image: "https://media.tenor.com/UvvgjxTnagUAAAAM/cat-meow.gif",
            name: "Kanvas",
            description: "Explore an abandoned world in this frozen landscape. Continue moving forward as the only things guiding you is the sound of the animals and the beauty of music. The world is your canvas.",
            myRole: "In this project I took the role of team lead, offering support wherever needed. I also worked extensively on creating the system for puzzles, I also worked on the shaders as well as the Artificial Intelligence for the animals.",
            tags: ['Unity', 'C#', 'Github', 'Music', 'Adventure', 'Exploration', 'Atmospheric'],
            url: ""
        }

        ,
        {
            image: "https://thumbs.gfycat.com/UnfinishedOccasionalIraniangroundjay-size_restricted.gif",
            name: "Rougelite",
            description: "Explore a procedurally generated world filled with unique and amazing monsters. Create the perfect team to fight against the wild enemies you encounter so that you can explore the world.",
            myRole: "In this project I took the role of team lead. I also worked extensively on creating the event system that the game operates using, as well as creating a base for the monsters and their attacks in a way that makes it very easy to modify and implement further monsters or attacks. Another aspect I took a smaller role in was the procedural generation, specifically work regarding the mesh generation for the world map.",
            tags: ['Unity', 'C#', 'Github', 'Procedural Generation', 'RPG', 'Turn Based'],
            url: ""

        },

        {
            image: "https://media.tenor.com/f_saBHiUTz0AAAAC/cute-cat.gif",
            name: "Neon Lights (Current Project)",
            description: "Traverse through the world in a fast paced platforming game. Neon Lights is a game all about precision and speed, as you ride alongside walls and have to jump between them with thought going into every jump.",
            myRole: "This project is a solo project for me to familiarize myself more with Unreal Engine. As such, in this project I have worked on everything from the shaders, to the AI, to the level design and more.",
            tags: ['Unreal Engine 5', 'C++', 'Github', 'Shaders', 'Platforming', 'Fast Paced'],
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
                <InfoCard name={items[currentIndex].name} tags={items[currentIndex].tags} description={items[currentIndex].description} myRole={items[currentIndex].myRole} url={items[currentIndex].url} />
            </Box>
        </div>
    );
};
export default LandingPage;