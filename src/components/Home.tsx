import { Box } from '@chakra-ui/react'
import Typewriter from "typewriter-effect"
import { Helmet } from 'react-helmet';


const Home = () => {
    return(
    <div className="home-page">
        <Helmet>
            <title>doctakim | Home</title>
        </Helmet>
        <Box as="h1" fontSize="4rem" textAlign="center">
        Currently ...
        <br></br>
        <div className="home-page-typewriter">
            <Typewriter options={{loop: true}}
                onInit={(typewriter) => {
                    
                    typewriter
                        .typeString("Making a portfolio using React and TS ⚛️")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Working on mobile development at Wazzle 📱 ")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Trying to get better at tennis 🎾 ")
                        .pauseFor(2000)
                        .start();
                }}
            />
        </div>
        </Box>
    </div>
    )
}

export default Home