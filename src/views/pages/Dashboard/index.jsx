import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import {
  Box, Center, Divider, Flex, Heading, Text, Tooltip, VStack, Wrap, WrapItem
} from "@chakra-ui/react"
import React, { useState } from 'react'
import BloodDrop from '../../../assets/bloodDrop.svg'
import PlasmaDrop from '../../../assets/plasmaDrop.svg'
import Oxygen from '../../../assets/oxygen.svg'
import Doctor from '../../../assets/doctor.svg'
import FormModals from './Modals'

const DonorLayer = {
  'bloodDonor': { name: 'Blood', image: BloodDrop },
  'plasmaDonor': { name: 'Plasma', image: PlasmaDrop },
  'oxygenDonor': { name: 'Oxygen', image: Oxygen },
  'consultancy': { name: 'Consultancy', image: Doctor }
}



export default function Dashboard() {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => { setOpenModal(null) };

  return (
    <>
      {/* NAVBAR */}
      <FormModals
        open={!!openModal}
        onClose={closeModal}
        id={openModal}
      />
      <Flex align="center" justify="center">
        <Box
          padding='var(--chakra-space-3)'
          margin='var(--chakra-space-3)'
          colorScheme="yellow"
          zIndex='1'
          overflowWrap='break-word'
          textAlign='center'
          background='var(--chakra-colors-yellow-400)'
          // borderColor='var(--chakra-colors-gray-200)'
          // borderWidth='1px'
          borderRadius='12px'
          width='90vw'
          boxShadow="md"
          position='fixed'
          top='0'
        >
          <Heading as="h1" size="lg" >MATES Warriors</Heading>
          <Text fontSize={{ base: "0px", md: "16px" }}>
            An initiative by Maharaja Agrasen Techincal Society
          </Text>
        </Box>
      </Flex>

      {/* MAIN DASHBOARD */}
      <Center minH="80vh" mt="13.5vh" >
        <Box w={{ base: '100vw', md: '90vw' }} borderWidth="1px" borderRadius="lg" minH="70vh" bgColor="#fff" >
          <Flex flexDirection='column'>

            <Box mx={{ base: '5vh', md: '10vh' }} my='6vh' >

              <Heading size='sm' mb='15px'>I want to donate</Heading>
              <Wrap spacing='5vw'>
                {Object.keys(DonorLayer).map(type => (
                  <Tooltip isDisabled={type !== 'consultancy'}
                    label="Coming Soon" fontSize="md"
                  >
                    <WrapItem>
                      <Button onClick={() => setOpenModal(type)}
                        disabled={type === 'consultancy'}
                        variant="outline"
                        _focus={{ borderColor: "var(--chakra-colors-yellow-400)" }} borderWidth='2px' borderColor='rgba(238, 238, 238, 1)' p='12px' height='150px' width='150px'>
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

            <Center width='90vw'>
              <Divider width='85vw' align='center' />
            </Center>

            <Box mx={{ base: '5vh', md: '10vh' }} my='6vh' width='auto'>

              <Heading size='sm' mb='15px'>I am looking for</Heading>
              <Wrap spacing='5vw'>
                {Object.keys(DonorLayer).map(type => (
                  <Tooltip isDisabled={type !== 'consultancy'}
                    label="Coming Soon" fontSize="md"
                  >
                    <WrapItem>
                      <Button onClick={() => setOpenModal(type)}
                        disabled={type === 'consultancy'}
                        variant="outline"
                        _focus={{ borderColor: "var(--chakra-colors-yellow-400)" }} borderWidth='2px' borderColor='rgba(238, 238, 238, 1)' p='12px' height='150px' width='150px'>
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

          </Flex>
        </Box>
      </Center>


      {/* Footer */}
      <Flex align="center" justify="center" my='12px' >
        <Text fontSize='sm'>
          Copyright &copy; Maharaja Agrasen Technical Society 2021
        </Text>
      </Flex>
    </>
  )
}
