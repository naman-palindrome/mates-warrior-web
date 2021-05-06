import { RepeatClockIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import {
  Avatar,
  Box, Center, Flex, Heading, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text
} from "@chakra-ui/react"
import React from 'react'
import { useLocation } from 'react-router'
import LogOutLogo from '../../../assets/Icons/logout.svg'
import ProfileLogo from '../../../assets/Icons/profile-user.svg'
import Logo from '../../../assets/MAU-logo.png'

export default function Footer() {


  return (
    <>
      {/* Footer */}
      {/* <div style={{ padding: "40px" }}></div> */}
      <Box bg="yellow.100" width="100%" p="3" >
        <Center>
          <Text fontSize='sm'>
            Copyright &copy; <b>Maharaja Agrasen Technical Society 2021</b>
          </Text>
        </Center>
      </Box>
    </>
  )
}
