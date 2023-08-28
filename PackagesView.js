import React, { useState } from 'react';
import PackagesTable from './PackagesTable';
import { useData } from './DataContext';
import SearchBar from './SearchBar';

function Table() {
  const [checkMatch, setcheckMatch] = useState([]);

  const data = useData();

    const handleSearch = (query) => {
      console.log("data", data)
      const matched = data.filter(item => item.recipient.email.toLowerCase().includes(query.toLowerCase()))
      setcheckMatch(matched);
      console.log(checkMatch);
    }
  return (
    <div>
        <h1 className = "tableLayout"> Building Mail Room </h1>
        <SearchBar alignleft = "" onSearch = {handleSearch}></SearchBar>
        {data ? 
         <PackagesTable data={data} />
         :
         undefined
        }
    </div>

  );
}

export default Table;
