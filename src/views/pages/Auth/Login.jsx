import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { PhoneIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import LoginSVG from '../../../assets/login.svg'
import MaitLogo from '../../../assets/mait.png'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Center minH="100vh">
      <Box w='75vw' borderWidth="1px" borderRadius="lg" minH="80vh"
        bgColor="#fff"
      >
        <Flex>
          <Center w='50%'>
            <Image src={LoginSVG}
              boxSize="300px"
              objectFit="cover"
            />
          </Center>

          <Box flex="1" p="4rem">
            <form onSubmit={handleSubmit}>
              <FormControl id="mobile" isRequired>
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
                <Button
                  my="1rem"
                  width="100%"
                  colorScheme="yellow"
                  type='submit'
                >
                  Get OTP
              </Button>
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Box>
    </Center>
  )
}

export default Login
