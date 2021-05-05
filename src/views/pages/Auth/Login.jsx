import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { PhoneIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import LoginSVG from '../../../assets/login.svg'
import MaitLogo from '../../../assets/mait.png'
import { authenticateUser } from '../../../store/auth'

function Login() {
  const [openOtp, setOpenOtp] = useState(false)
  const history = useHistory();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authenticateUser(false))
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenOtp(true);
    if (openOtp) {
      dispatch(authenticateUser(true))
      history.push('/')
    }
  }

  return (
    <Center minH="100vh">
      <Box w='75vw' borderWidth="1px" borderRadius="lg" minH="80vh"
        bgColor="#fff"
      >
        <Flex>
          <Center w='50%' minH='80vh'>
            <Image src={LoginSVG}
              boxSize="500px"
              objectFit="cover"
            />
          </Center>

          <Box flex="1" p="4rem">
            <FormControl isRequired>
              <FormLabel >Enter Mobile Number</FormLabel>
              <InputGroup >
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input size="md" variant="filled"
                  type="tel"
                  placeholder="+91 xxxxxxxxx"
                />
              </InputGroup>
            </FormControl>
            <br />
            <FormControl isRequired>
              <Collapse in={openOtp} animateOpacity>
                <FormLabel >Enter OTP</FormLabel>
                <InputGroup >
                  <Input size="md" variant="filled"
                    placeholder="OTP"
                  />
                </InputGroup>
              </Collapse>
            </FormControl>
            <br />

            <Button
              my="1rem"
              width="100%"
              colorScheme="yellow"
              onClick={handleSubmit}
            >
              {!openOtp ? "Get OTP" : "Verify and Proceed"}
            </Button>

          </Box>
        </Flex>
      </Box>
    </Center>
  )
}

export default Login
