import React from 'react';
import { ChakraProvider, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import PackagesTable from './PackagesView';
import AppHome from './AppHome';
import { DataProvider } from './DataContext';
import UserView from './UserView';

const App = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <DataProvider>
          <VStack maxHeight={"100vh"}>
            <AppHome></AppHome>
            <Tabs>
              <TabList>
                <Tab>All Packages</Tab>
                <Tab>Packages by Users</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PackagesTable/>
                </TabPanel>
                <TabPanel>
                  <UserView/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </DataProvider>
      </ChakraProvider>
    </React.StrictMode>

  );
};

export default App;


