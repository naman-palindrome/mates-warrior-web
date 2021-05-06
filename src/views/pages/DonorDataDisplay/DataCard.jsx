import React from 'react'
import {Table,
Thead,
Tbody,
Tfoot,
Tr,
Th,
Td,
TableCaption
} from "@chakra-ui/react"
function DataCard() {
    return (
        <Table width="100%" bg="white" variant="simple" >
        <Tbody>
          <Tr>
            <Td>Rahul Shristy</Td>
            <Td>Blood group: B+</Td>
          </Tr>
          <Tr>
            <Td>Delhi</Td>
            <Td>110047</Td>
          </Tr>
          <Tr>
            <Td>Date of last blood Donation:</Td>
            <Td>12March</Td>
          </Tr>
          <Tr>
            <Td>Phone No:</Td>
            <Td>9815638276</Td>
          </Tr>
        </Tbody>
      </Table>
    )
}

export default DataCard
