import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import NotifyPackageButton from './NotifyPackageButton';



const PackagesTable = ({ data, isMinimal }) => {
  return (
    <Table variant="striped" colorScheme="green">
      <Thead>
        <Tr>
        {isMinimal ? undefined : <>
          <Th>Name</Th>
          <Th>Email</Th>
        </>
        }
          <Th>Carrier</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(item => (
          <Tr key={item.id} _hover={{
            cursor: 'pointer',
          }}>
            {isMinimal ? undefined : <>
              <Td>
                {item.recipient.name}
              </Td>
              <Td>
                {item.recipient.email}
              </Td>
            </>}
            <Td>
              {item.carrier}
            </Td>
            <Td>
              <NotifyPackageButton data = {item}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

  );
}

export default PackagesTable;
