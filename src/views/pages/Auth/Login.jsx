import { AlertIcon } from '@chakra-ui/alert'
import { AlertDescription } from '@chakra-ui/alert'
import { Alert } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { PhoneIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import LoginSVG from '../../../assets/login.svg'
import MaitLogo from '../../../assets/mait.png'
import { authenticateUser } from '../../../store/auth'
import { validatePhone } from '../../../utils/regex';

const styles = {
  alert: { position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }
}

function Login() {
  const [openOtp, setOpenOtp] = useState(false)
  const [mobileInput, setMobileInput] = useState('')
  const [otpInput, setOtpInput] = useState('')
  const [error, setError] = useState(null)
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser(false))
  }, [])

  useEffect(() => {
    setTimeout(() => setError(null), 2000)
  }, error)

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePhone(mobileInput) ? setOpenOtp(true) : setError("Please enter valid phone number");

    if (openOtp) {
      dispatch(authenticateUser(true))
      history.push('/')
    }
  }

  return (
    <>
      {!!error &&
        <Alert status="error" style={styles.alert}>
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      }
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
              <FormControl id="mobile" isRequired>
                <FormLabel >Enter Mobile Number</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input size="md" variant="filled"
                    type="tel"
                    placeholder="+91 xxxxxxxxx"
                    isInvalid={!!error}
                    value={mobileInput}
                    onChange={e => setMobileInput(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <br />
              <FormControl id="otp" isRequired>
                <Collapse in={openOtp} animateOpacity>
                  <FormLabel >Enter OTP</FormLabel>
                  <InputGroup >
                    <Input size="md" variant="filled"
                      placeholder="OTP"
                      value={otpInput}
                      onChange={e => setOtpInput(e.target.value)}
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
    </>
  )
}

export default Login
