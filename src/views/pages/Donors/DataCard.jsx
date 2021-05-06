import { Button } from '@chakra-ui/button'
import { Box, Text, VStack } from '@chakra-ui/layout'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React from 'react'

function DataCard() {
  return (
    <Box borderRadius="lg"
      borderWidth='2px'
    >
      <Table variant="striped" size="sm">
        <Tbody>
          <Tr>
            <Td>Name</Td>
            <Td><b>Simranjeet Singh</b></Td>
          </Tr>
          <Tr>
            <Td>Blood Group</Td>
            <Td><b>O+ve</b></Td>
          </Tr>
          <Tr>
            <Td>Location</Td>
            <Td><b>Delhi</b></Td>
          </Tr>
          <Tr>
            <Td>PinCode</Td>
            <Td><b>110012</b></Td>
          </Tr>
          <Tr>
            <Td>Last Donation:</Td>
            <Td><b>12 March 2021</b></Td>
          </Tr>
          <Tr>
            <Td>Phone No:</Td>
            <Td><b>9815638276</b></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default DataCard
