import {
  Center, FormControl,
  FormLabel,
  Image, Input,
  ListItem,
  Select
} from "@chakra-ui/react";
import React from "react";
import Oxygen from '../../../../assets/oxygen.svg';

let cities = ['Delhi', 'Gurgaon', 'Bangalore', 'Pune', 'Ahmedabad', 'Mumbai', 'Thane', 'Nashik', 'Kolkata', 'Lucknow', 'Noida', 'Faridabad', 'Prayagraj', 'Patna', 'Ranchi', 'Jaipur', 'Agra', 'Chandigarh', 'Nagpur', 'Chennai', 'Bhopal', 'Indore', 'Hyderabad', 'Kerala', 'Bihar', 'Gujarat', 'Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Orissa', 'Uttar Pradesh', 'Telangana', 'Andhra Pradesh', 'Chhatisgarh', 'Tamil Nadu', 'West Bengal', 'Haryana', 'Uttrakhand', 'J&K', 'Himachal Pradesh', 'Jharkhand', 'Rajasthan', 'Goa', 'Assam', 'Punjab', 'Saurashtra & South Gujarat', 'Uttar Pradesh East', 'Uttar Pradesh West', 'Bundelkhand', 'Other']

let bloodgroups = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+']

export default function OxygenDonor() {
  return (

    <>
      <Center>
        <Image src={Oxygen}
          boxSize="100px"
          objectFit="cover"
        />
      </Center>
      <FormControl mt={4}>
        <FormLabel >What do you want to donate</FormLabel>
        <Select variant='filled' placeholder="Type">
          <option value="cylinder">Cylinder</option>
          <option value="refill">Refill</option>
          <option value="concentrator">Concentrator</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel >Name</FormLabel>
        <Input variant='filled' placeholder="Name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel >City</FormLabel>
        <Select variant='filled' placeholder="Select your city">
          {cities.map(item => {
            return (
              <option value="option1">{item}</option>
            )
          })}
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel >Pin Code</FormLabel>
        <Input variant='filled' placeholder="Pin-Code" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel >Phone Number</FormLabel>
        <Input variant='filled' placeholder="Phone Number" />
      </FormControl>
      <FormControl mt={4} >
        <FormLabel >Mates Affiliation <small>(if any)</small></FormLabel>
        <Input variant='filled' placeholder="Mates Affiliation" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel >Quantity of Product</FormLabel>
        <Input variant='filled' placeholder="Quantity of Product" />
      </FormControl>
    </>
  )
}
