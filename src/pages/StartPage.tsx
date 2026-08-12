import { Show, Image as ChakraImage, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { motion } from "framer-motion";
import SEO from "../components/SEO";
import HorizonStart from "../components/start/HorizonStart";

const StartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mobileImageVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>biojameskim</title>
      </Helmet>
      <SEO title="biojameskim" url="/" />
      <Show below="md">
        <VStack spacing="50vh" pt="20vh" pb="50vh" align="center" justify="start" w="100%">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame1.png" alt="Welcome" htmlWidth="70%" />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame2.png" alt="Frame 2" htmlWidth="70%" />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame3.png" alt="Frame 3" htmlWidth="70%" />
          </motion.div>
        </VStack>
      </Show>
      <Show above="md">
        <HorizonStart />
      </Show>
    </>
  );
};

export default StartPage;
