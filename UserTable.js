import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td,
Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import PackagesTable from './PackagesTable';
import NotifyAllButton from './NotifyAllButton';


const UserTable = ({data}) => {
  const [selectedPackages, setSelectedPackages] = useState();

        return (
        <> 
        <div style={{ overflowX: 'auto' }}>
        <Table variant="striped" colorScheme="green">
          <Thead >
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Number of Packages</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(([email, userData]) => (
              <Tr key={email} _hover={{
                cursor: 'pointer',
              }}>
                <Td>
               {userData.recipient.name}
                </Td>
                <Td>
                {userData.recipient.email}
                </Td>
                <Td>
                {userData.packages.length} <Button colorScheme = "green" size = "sm" fontSize = "12px" onClick={() => setSelectedPackages(userData)}> View Packages</Button>
                </Td>
                <Td>
                <NotifyAllButton data = {userData} onClick ={() => console.log("clicked")} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </div>
        {selectedPackages ? 
        <Modal isOpen onClose={()=> setSelectedPackages()} whitespace = "nowrap" size = "xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Packages for {selectedPackages.recipient.name + ":"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <PackagesTable data = {selectedPackages.packages} isMinimal></PackagesTable>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      :
      undefined
      }
      </>
  );
}

export default UserTable;
