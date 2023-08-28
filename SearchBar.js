import React, { useState, useEffect } from 'react';
import { Input, Stack, InputGroup, InputRightAddon,InputLeftAddon, } from '@chakra-ui/react'

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        // take in the input from the seach bar and setQuery to query 
        const searched = event.target.value;
        setQuery(searched);
        onSearch(searched)
        // onSearch(searched)
        console.log(query);
    }

    return (
        <InputGroup>
          <Input type="text" focusBorderColor='lightgreen' placeholder='search for user' onChange={handleChange}/>
        </InputGroup>
    )
}
export default SearchBar;