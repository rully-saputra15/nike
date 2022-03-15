import React, {useState} from "react";
import './App.css';
import {
  Button,
  Center,
  VStack,
  useToast,
  ScaleFade,
  Box,
  useDisclosure,
  SlideFade,
  Text,
  AspectRatio,
  Image, Avatar, HStack
} from "@chakra-ui/react";

import nike from "./nike.jpeg";
import haechan from "./haechan.jpeg";

const App = () => {
  const [count, setCount] = useState(0);
  const {isOpen, onToggle} = useDisclosure();
  const toast = useToast();
  const handleAddCount = () => {
    const updateCount = count + 1;
    setCount(updateCount);
    if (updateCount < 5) {
      toast({
        title: 'Teken buttonnya lagi',
        description: `Kurang ${5 - updateCount} click lagi!`,
        status: 'success',
        duration: 750,
        isClosable: true,
        position: "top-end"
      })
    }
    if (updateCount === 5) {
      onToggle()
    }
  }
  return (
    <Center h="100vh" bgGradient='linear(to-r, #2193b0, #6dd5ed)'>
      {
        count !== 5 ?
          <ScaleFade initialScale={0.1} in={true}>
            <Button colorScheme='gray'
                    onClick={() => handleAddCount()}>Buka Hadiah!</Button>
          </ScaleFade>
          :
          <SlideFade offsetY='20px' in={isOpen}>
            <Box bg='gray.100'
                 p='4'
                 w='xs'
                 h='xs'
                 borderRadius={10}
                 boxShadow='lg'>
              <HStack justifyContent="center">
                <Avatar src={nike} size='2xl'/>
                <Avatar src={haechan} size='2xl'/>
              </HStack>
              <Text fontSize="2xl" align="center" fontWeight={700} pt={4}>
                HAPPY
                BIRTHDAY
                BESTIE!
              </Text>
              <Text fontSize="2xl" align="center" >🥳🥳🥳🥳🥳🥳</Text>
            </Box>
          </SlideFade>
      }
    </Center>
  );
}

export default App;
