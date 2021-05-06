import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, 
    Button, 
    ButtonGroup,
    Input,
    Center, 
    Square, 
    Circle, 
    Box,Select,Image,Heading ,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,InputGroup,InputRightElement
  } from "@chakra-ui/react"
  import BloodDrop from '../../../assets/bloodDrop.svg'
  import {HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import DataCard from './DataCard'
  
  function DonarList() {

    var cities=['Delhi', 'Gurgaon', 'Bangalore', 'Pune', 'Ahmedabad', 'Mumbai', 'Thane', 'Nashik', 'Kolkata', 'Lucknow', 'Noida', 'Faridabad', 'Prayagraj', 'Patna', 'Ranchi', 'Jaipur', 'Agra', 'Chandigarh', 'Nagpur', 'Chennai', 'Bhopal', 'Indore', 'Hyderabad', 'Kerala', 'Bihar', 'Gujarat', 'Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Orissa', 'Uttar Pradesh', 'Telangana', 'Andhra Pradesh', 'Chhatisgarh', 'Tamil Nadu', 'West Bengal', 'Haryana', 'Uttrakhand', 'J&K', 'Himachal Pradesh', 'Jharkhand', 'Rajasthan', 'Goa', 'Assam', 'Punjab', 'Saurashtra & South Gujarat', 'Uttar Pradesh East', 'Uttar Pradesh West', 'Bundelkhand', 'Other']

    var bloodgroups=['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+']
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Center bg="white" h="100px" color="black">
      
               <Image src={BloodDrop}
              boxSize="100px"
              objectFit="cover"
            />
            <Heading as="h1" size="4xl" isTruncated>Blood Donor </Heading>
             </Center>
             <br/><br/>

             <Table width="100%" bg="white"  >
             <Tbody>
    <Tr>
    <Td>  <HamburgerIcon w={8} h={8} color="red" /> Filter by
    </Td>
<Td>
      <Select bg="white" width="100%" placeholder="Search by city">
       { cities.map(item=>{
             return(
               <option value="option1">{item}</option>
             )
           }
        )
          }
  </Select>
  </Td>
<Td>
  <Select bg="white" width="100%" placeholder="Select Blood Group">
              {

         bloodgroups.map(item=>{
           return(

             <option value="option1">{item}</option>
           )
         }
           )
           
              }
             </Select>      
          
       </Td>
       <Td>    
       <InputGroup>
             <Input bg="white" width="100%" placeholder="Enter your pin" />
            <InputRightElement children={<Search2Icon color="blue" />} />
        </InputGroup>
        </Td>
            <Td>
             <Button colorScheme="blue">Search</Button>
            </Td>
            </Tr>
            </Tbody>
</Table>
             <br/><br/>
       
<Table width="100%">
<Tr>
    <Td><DataCard/></Td>
    <Td><DataCard/></Td>
</Tr>
<Tr>
    <Td><DataCard/></Td>
    <Td><DataCard/></Td>
</Tr>

</Table>


        </div>
    )
}

export default DonarList
