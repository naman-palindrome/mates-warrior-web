import {
  Button,
  Center, Checkbox, FormControl,
  FormLabel,
  Image, Input, Modal,
  ModalBody,
  ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay,
  Select, useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import BloodDrop from '../../../assets/bloodDrop.svg';
import Oxygen from '../../../assets/oxygen.svg';
import PlasmaDrop from '../../../assets/plasmaDrop.svg';



export default function CustomModal() {

  const [modalBody, setModalBody] = useState();
  const [modalHeader, setModalHeader] = useState();
  var cities = ['Delhi', 'Gurgaon', 'Bangalore', 'Pune', 'Ahmedabad', 'Mumbai', 'Thane', 'Nashik', 'Kolkata', 'Lucknow', 'Noida', 'Faridabad', 'Prayagraj', 'Patna', 'Ranchi', 'Jaipur', 'Agra', 'Chandigarh', 'Nagpur', 'Chennai', 'Bhopal', 'Indore', 'Hyderabad', 'Kerala', 'Bihar', 'Gujarat', 'Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Orissa', 'Uttar Pradesh', 'Telangana', 'Andhra Pradesh', 'Chhatisgarh', 'Tamil Nadu', 'West Bengal', 'Haryana', 'Uttrakhand', 'J&K', 'Himachal Pradesh', 'Jharkhand', 'Rajasthan', 'Goa', 'Assam', 'Punjab', 'Saurashtra & South Gujarat', 'Uttar Pradesh East', 'Uttar Pradesh West', 'Bundelkhand', 'Other']

  var bloodgroups = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+']
  const getModalBody = (id) => {
    var modalBody;
    //(id=1  for blood donor)
    if (id === 1) {
      modalBody = (
        <>
          <Center>
            <Image src={BloodDrop}
              boxSize="100px"
              objectFit="cover"
            />
          </Center>
          <FormControl mt={4}  >
            <Input variant='filled' placeholder=" Name" />
          </FormControl>
          <FormControl mt={4}>
            <Select variant='filled' placeholder="Select City">
              {cities.map(item => {
                return (
                  <option value="option1">{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Pin-Code" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Phone Number" />
          </FormControl>
          <FormControl mt={4}>
            <Select variant='filled' placeholder="Select BloodGroup">
              {bloodgroups.map(item => {
                return (
                  <option value="option1">{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Mates Affiliation" />
          </FormControl>
          <FormControl mt={4} >
            <Input variant='filled' placeholder="Date of last of Blood Donation" />
          </FormControl>

        </>
      )
    }
    if (id === 2) {
      modalBody = (
        <>
          <Center>
            <Image src={PlasmaDrop}
              boxSize="100px"
              objectFit="cover"
            />
          </Center>
          <FormControl mt={4}>
            <FormLabel>Check Eligibility</FormLabel>
            <Checkbox colorScheme="blue" >
              I am eligible for plasma donation
              </Checkbox>
          </FormControl>

          <FormControl mt={4}>
            <Input variant='filled' placeholder="Name" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="City" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Pin-Code" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Phone Number" />
          </FormControl>
          <FormControl mt={4}>
            <Select variant='filled' placeholder="Select BloodGroup">
              {bloodgroups.map(item => {
                return (
                  <option value="option1">{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl mt={4} >
            <Input variant='filled' placeholder="Mates Affiliation" />
          </FormControl>

        </>
      )

    }
    if (id === 3) {
      modalBody = (
        <>
          <Center>
            <Image src={Oxygen}
              boxSize="100px"
              objectFit="cover"
            />
          </Center>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="What do you want to donate" />
          </FormControl>

          <FormControl mt={4}>
            <Input variant='filled' placeholder="Name" />
          </FormControl>
          <FormControl mt={4}>
            <Select variant='filled' placeholder="Select your city">
              {cities.map(item => {
                return (
                  <option value="option1">{item}</option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Pin-Code" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Phone Number" />
          </FormControl>
          <FormControl mt={4} >
            <Input variant='filled' placeholder="Mates Affiliation" />
          </FormControl>
          <FormControl mt={4}>
            <Input variant='filled' placeholder="Quantity of Product" />
          </FormControl>
        </>
      )
    }
    setModalBody(modalBody)
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div onClick={() => { setModalHeader("Blood Donor"); getModalBody(1) }}><Button onClick={onOpen}>Blood Donor</Button></div>
      <div onClick={() => { setModalHeader("Plasma Donor"); getModalBody(2) }}><Button onClick={onOpen}>Plasma Donor</Button></div>
      <div onClick={() => { setModalHeader("Oxygen Donor"); getModalBody(3) }}><Button onClick={onOpen}>Oxygen Donor</Button></div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Center>{modalHeader}</Center></ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            {modalBody}
          </ModalBody>

          <ModalFooter>
            <Center>
              <Button colorScheme="orange" mr={3}>
                Register as {modalHeader}
              </Button>
            </Center>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
