import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { PhoneIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
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
      <Box w="lg" borderWidth="1px" borderRadius="lg" minH="90vh"
        className="bg-white px-6 pb-6"
      >
        <Image src={LoginSVG}
          boxSize="300px"
          objectFit="cover"
          className="mx-auto"
        />
        <form onSubmit={handleSubmit}>
          <FormControl id="mobile" className="my-6" isRequired>
            <FormLabel className="text-gray-600">Enter Mobile Number</FormLabel>
            <InputGroup
              className="my-2"
            >
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
              width="100%"
              colorScheme="yellow"
              type='submit'
              className="my-6"
            >
              Get OTP
          </Button>
          </FormControl>
        </form>
        <Stack spacing={0} className="pt-14">
          <Text fontSize="md" className='mx-auto mt-auto'>
            Initiative By
          </Text>
          <Image
            src={MaitLogo}
            boxSize="60px"
            objectFit="container"
            className='mx-auto'
          />
        </Stack>
      </Box>
    </Center>
  )
}

export default Login
