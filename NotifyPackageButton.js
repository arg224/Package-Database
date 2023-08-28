import React,  { useState}from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from "@chakra-ui/react"

const NotifyPackageButton = ({ data }) => {
    

    const [isLoading, setIsLoading] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        fetch('https://hook.us1.make.com/ksucstundqvs6gm3l6b3cer2am3hi84c', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    notify: [{
                        "email": data.recipient.email,
                        "content":`You have a ${data.type} size package delivered by ${data.carrier} waiting for pickup $(id:package.id)`
                    }] 
            })
        })
        .then(v => v.text()).then(console.log)
        .then(setIsAlertVisible(true))
        .finally(() => setIsLoading(false))
       }

    return (
        <div>
        <Button colorScheme="green" size="sm" fontSize="12px" onClick={handleClick}> Notify Specific</Button>
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
export default NotifyPackageButton

