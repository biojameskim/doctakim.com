import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, ZoomIn } from 'react-scroll-motion'
import { Text, useColorModeValue, } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

const StartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="starter-page">
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Move(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "5rem" }}>Hi, I'm James.</span>
                        <Text className='scroll-down-icon' pt='2rem' fontSize='2rem' align={'center'}><ChevronDownIcon /></Text>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Animator animation={batch(Sticky(), Fade(), ZoomIn(2, 1), MoveOut(0, -500))}>
                        <span style={{ fontSize: "300%" }}>I'm studying</span>
                        <br />
                        <span style={{ fontSize: "600%" }}>CS at Cornell 👨🏻‍💻</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={2}>
                    <Animator animation={batch(Fade(), Move(0, 200), Sticky(), MoveOut(0, -300))}>
                        <span style={{ fontSize: "300%" }}>and minoring in</span>
                        <br />
                        <span style={{ fontSize: "400%" }}>Digital Culture and Production 🎨</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={3}>
                    <div className="from-california">
                        <Animator animation={batch(Fade(), Move(0, 190), Sticky(37, 63), MoveOut(0, -300))}>
                            <Text color={useColorModeValue('black', 'black')} fontSize='80%' >I'm from California</Text>
                            <span style={{ fontSize: "60px" }}>🌴 🌴 🌴</span>
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage page={4}>
                    <div className="in-ithaca">
                        <Animator animation={batch(Fade(), Move(0, 800), Sticky(65, 35), MoveOut(0, -300))}>
                            <Text color={useColorModeValue('black', 'black')} fontSize='60%' >But currently in</Text>
                            <Text color={useColorModeValue('black', 'black')} fontSize='80%' >Ithaca, NY</Text>
                            <span style={{ fontSize: "60px" }}>❄️ ❄️ ❄️</span>
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage page={5}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <span style={{ fontSize: "50px" }}>But back to the topic</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={6}>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={7}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <span style={{ fontSize: "50px" }}>Hi, I'm James Kim</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <span style={{ fontSize: "50px" }}>I want to leave a meaningful impact on the world around me</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={10}>
                    <Animator animation={batch(FadeIn(), Sticky(), Fade(), MoveOut(0, -300))}>
                        <span style={{ fontSize: "60px" }}>
                            Come check out what I'm doing!
                        </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={11}>
                    <Animator animation={Fade()}>
                        <span style={{ fontSize: "60px" }}> </span>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={12}>
                    <Animator animation={batch(Sticky(), FadeIn(), ZoomIn(3, 1))}>
                        <Link to="/home"><span style={{ fontSize: "120px" }}>🏠</span></Link>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </div>
    )

}

export default StartPage