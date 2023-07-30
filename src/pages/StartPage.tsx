import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, ZoomIn } from 'react-scroll-motion'
import { Text, useColorModeValue, } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

const StartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="starter-page">
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Move(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "5rem" }}>Hi, I'm James.</span>
                        <Text className='scroll-icon' pt='2rem' fontSize='2rem' align={'center'}><ChevronDownIcon /></Text>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), ZoomIn(2, 1), MoveOut(0, -500))}>
                        <span style={{ fontSize: "300%" }}>I'm studying</span>
                        <br />
                        <span style={{ fontSize: "600%" }}>CS at Cornell 👨🏻‍💻</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Move(0, 200), Sticky(), MoveOut(0, -300))}>
                        <span style={{ fontSize: "300%" }}>and minoring in</span>
                        <br />
                        <span style={{ fontSize: "400%" }}>Operations Research ⚙️</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <div className="from-california">
                        <Animator animation={batch(Fade(), Move(0, 190), Sticky(37, 63), MoveOut(0, -300))}>
                            <Text color={useColorModeValue('black', 'black')} fontSize='80%' >I'm from California</Text>
                            <span style={{ fontSize: "60px" }}>🌴 🌴 🌴</span>
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage>
                    <div className="in-ithaca">
                        <Animator animation={batch(Fade(), Move(0, 800), Sticky(65, 35), MoveOut(0, -300))}>
                            <Text color={useColorModeValue('black', 'black')} fontSize='60%' >But currently in</Text>
                            <Text color={useColorModeValue('black', 'black')} fontSize='80%' >Ithaca, NY</Text>
                            <span style={{ fontSize: "60px" }}>❄️ ❄️ ❄️</span>
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text style={{ fontSize: "50px" }}>I love learning new things</Text>
                        <Text style={{ fontSize: "50px" }}>and telling stories.</Text>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), ZoomIn(2, 1))}>
                        <span style={{ fontSize: "60px" }}>
                            Come check out what I'm doing!
                        </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), FadeIn(), ZoomIn(2, 1))}>
                        <Link to="/home"><span style={{ fontSize: "120px" }}>🏠</span></Link>
                        <Text className='scroll-icon' mt='-4' fontSize='2rem' align={'center'}><ChevronUpIcon /></Text>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </div>
    )

}

export default StartPage