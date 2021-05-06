import { Button } from '@chakra-ui/button'
import { ChevronDownIcon, ChevronUpIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import {
  Avatar,
  Box, Center, Collapse, Divider, Flex, Heading, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, VStack, Wrap, WrapItem
} from "@chakra-ui/react"
import React, { useState } from 'react'
import BloodDrop from '../../../assets/bloodDrop.svg'
import Doctor from '../../../assets/doctor.svg'
import TakerLogo from '../../../assets/Icons/health-care.svg'
import LogOutLogo from '../../../assets/Icons/logout.svg'
import DonorLogo from '../../../assets/Icons/organ-donation.svg'
import ProfileLogo from '../../../assets/Icons/profile-user.svg'
import Logo from '../../../assets/MAU-logo.png'
import Oxygen from '../../../assets/oxygen.svg'
import PlasmaDrop from '../../../assets/plasmaDrop.svg'
import FormModals from './Modals'

const DonorLayer = {
  'bloodDonor': { name: 'Blood', image: BloodDrop },
  'plasmaDonor': { name: 'Plasma', image: PlasmaDrop },
  'oxygenDonor': { name: 'Oxygen', image: Oxygen },
  'consultancy': { name: 'Consultancy', image: Doctor }
}



export default function Dashboard() {
  const [openModal, setOpenModal] = useState(null);

  const [isDonor, setIsDonor] = useState(true);

  const closeModal = () => { setOpenModal(null) };

  return (
    <>
      {/* NAVBAR */}
      <FormModals
        open={!!openModal}
        onClose={closeModal}
        id={openModal}
      />
      <Flex
        justify="space-between"
        align="center"
        py="0.5rem"
        px="5vw"
        w="100%"
        colorScheme="yellow"
        background='var(--chakra-colors-yellow-400)'
        boxShadow="md"
      >
        <HStack spacing="5">
          <Image src={Logo} boxSize="40px" />
          <Heading as="h1" size="md" >MATES Warriors</Heading>
        </HStack>
        <Menu>
          <MenuButton>
            <Avatar size="md"
              showBorder="true"
              src="https://bit.ly/kent-c-dodds"
            />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Image src={ProfileLogo} boxSize="1.2rem" />} >
              <strong>Profile</strong>
            </MenuItem>
            <MenuItem icon={<RepeatClockIcon fontSize="1.2rem" />} >
              <strong>History</strong>
            </MenuItem>
            <MenuDivider />
            <MenuItem color="red.500" icon={<Image src={LogOutLogo} boxSize="1.2rem" />}>
              <strong>LogOut</strong>
            </MenuItem>
          </MenuList>
        </Menu>

      </Flex>

      {/* MAIN DASHBOARD */}
      <Center mt="8" >
        <Box p="6" w={{ base: '100vw', md: '90vw' }} borderWidth="1px" borderRadius="lg" bgColor="#fff" >
          <Flex flexDirection='column'>
            <Button style={{ display: 'flex', justifyContent: 'space-between' }}
              size="lg"
              isFullWidth
              rightIcon={isDonor ? <ChevronUpIcon boxSize="1.5em" /> : <ChevronDownIcon boxSize="1.5em" />}
              onClick={() => setIsDonor(p => !p)}
            >
              <HStack spacing="5">
                <Image boxSize="1.5rem" src={DonorLogo} />
                <Heading size="md" flex="1"
                  color={!isDonor ? "grey" : 'default'}
                >
                  I am looking to donate
                </Heading>
              </HStack>
            </Button>
            <Collapse in={isDonor}>
              <Box my='6' mx='2'>
                <Wrap spacing='10'>
                  {Object.keys(DonorLayer).map(type => (
                    <Tooltip isDisabled={type !== 'consultancy'}
                      label="Coming Soon" fontSize="md"
                    >
                      <WrapItem>
                        <Button onClick={() => setOpenModal(type)}
                          disabled={type === 'consultancy'}
                          variant="outline"
                          _focus={{ borderColor: "var(--chakra-colors-yellow-400)" }}
                          borderWidth='2px' borderColor='rgba(238, 238, 238, 1)'
                          p='12px' height='150px' width='150px'
                        >
                          <VStack spacing={4} >
                            <Image
                              src={DonorLayer[type].image}
                              height='10vh'
                            />
                            <Text>{DonorLayer[type].name}</Text>
                          </VStack>
                        </Button>
                      </WrapItem>
                    </Tooltip>
                  ))}
                </Wrap>
              </Box>

              {/* <Box my='10px' mx='2' height="180px" borderWidth="2px">
                <HStack spacing='10' p="4" height='100%'>
                  {Object.keys(DonorLayer).map(type => (
                    <Box p='5' borderWidth="1px" height='100%'>
                      Plasma Required contact: xxxx
                    </Box>
                  ))}
                </HStack>
              </Box> */}

            </Collapse>

            <Divider width='85vw' my="4" align='center' mx="auto" />

            <Button style={{ display: 'flex', justifyContent: 'space-between' }}
              size="lg"
              isFullWidth
              rightIcon={!isDonor ? <ChevronUpIcon boxSize="1.5em" /> : <ChevronDownIcon boxSize="1.5em" />}
              onClick={() => setIsDonor(p => !p)}
            >
              <HStack spacing="5">
                <Image boxSize="1.5rem" src={TakerLogo} />
                <Heading size="md" flex="1"
                  color={isDonor ? "grey" : 'default'}
                >
                  I am looking for donor
                </Heading>
              </HStack>
            </Button>
            <Collapse in={!isDonor}>
              <Box my='6' mx='2'>
                <Wrap spacing='10'>
                  {Object.keys(DonorLayer).map(type => (
                    <Tooltip isDisabled={type !== 'consultancy'}
                      label="Coming Soon" fontSize="md"
                    >
                      <WrapItem>
                        <Button onClick={() => setOpenModal(type)}
                          disabled={type === 'consultancy'}
                          variant="outline"
                          _focus={{ borderColor: "var(--chakra-colors-yellow-400)" }}
                          borderWidth='2px' borderColor='rgba(238, 238, 238, 1)'
                          p='12px' height='150px' width='150px'
                        >
                          <VStack spacing={4} >
                            <Image
                              src={DonorLayer[type].image}
                              height='10vh'
                            />
                            <Text>{DonorLayer[type].name}</Text>
                          </VStack>
                        </Button>
                      </WrapItem>
                    </Tooltip>
                  ))}
                </Wrap>
              </Box>
            </Collapse>
          </Flex>
        </Box>
      </Center>


      {/* Footer */}
      <div style={{ padding: "40px" }}></div>
      <Box bg="yellow.100" width="100%" p="3" position="fixed" bottom="0">
        <Center>
          <Text fontSize='sm'>
            Copyright &copy; <b>Maharaja Agrasen Technical Society 2021</b>
          </Text>
        </Center>
      </Box>
    </>
  )
}
