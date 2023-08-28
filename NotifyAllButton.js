import React,  { useState}from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const NotifyAllButton = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    if(!data){
        return null
    }
    const carrierNames = data.packages.map((data) => data.carrier);
    const message = `Packages: ${carrierNames.join(', ')}`;

    const packageSize = data.packages.map((data) => data.type);
    const sizeMessage = `Packages: ${packageSize.join(', ')}`;


    const handleClick = () => {
        setIsLoading(true);
        fetch('https://hook.us1.make.com/ksucstundqvs6gm3l6b3cer2am3hi84c', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              notify: [
                {
                  email: data.recipient.email,
                  content: `You have the following awaiting your pickup: ${message} of ${sizeMessage} sizes`,
                }
            ]})
        })
        .then(console.log("hello world"))
        .then(setIsAlertVisible(true))
        .then(v => v.text()).then(console.log).finally(() => setIsLoading(false))
       }

    return (
        <div>
        <Button colorScheme="green" size="sm" fontSize="12px" onClick={handleClick}> Notify All</Button>
        {isAlertVisible ? 
        <Modal isOpen onClose = {()=> setIsAlertVisible(false)} whitespace = "nowrap" size = "xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification Sent!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      :
      undefined
      }
        </div>
    )

}
export default NotifyAllButton
