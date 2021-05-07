import {
  Heading, 
  Button, Box, VStack,
  Image,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay
} from "@chakra-ui/react";
import camelToTitle from "../../../../utils/camelToTitle";
import successSVG from "../../../../assets/success.svg";
import BloodDonor from "./BloodDonor";
import OxygenDonor from "./OxygenDonor";
import PlasmaDonor from "./PlasmaDonor";
import {useState} from 'react';



const getModal = (id) => {
  switch (id) {
    case 'bloodDonor':
      return <BloodDonor />
    case 'plasmaDonor':
      return <PlasmaDonor />
    case 'oxygenDonor':
      return <OxygenDonor />
    default:
      return <BloodDonor />
  }
}

export default function FormModals({ open, onClose, id }) {

  const [registerResult, setRegisterResult] = useState(false);

  return (
    <div>
      <Modal isOpen={open} onClose={() => { onClose(); setRegisterResult(false); }} autoFocus={false}
        scrollBehavior="inside" preserveScrollBarGap={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader><Center>{camelToTitle(id)}</Center></ModalHeader>

          <ModalBody pb={6}>
            {(registerResult)?
            <VStack justify='center'>
              <Image src={successSVG} p={20} />
              <Heading size="md" color="green" mb={20} >Registered Successfully !</Heading>
            </VStack>
            :getModal(id)}
          </ModalBody>

          <ModalFooter>
            {!registerResult && 
            <Button colorScheme="orange" onClick={() => setRegisterResult(true)}>
              Register as {camelToTitle(id)}
            </Button>}
          </ModalFooter>

        </ModalContent>
      </Modal>
    </div>
  )
}
