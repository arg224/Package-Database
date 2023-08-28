import React, { createContext, useContext, useState, useEffect} from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hook.us1.make.com/6lxetoghdbfycijovj2n3y76m9f1a5ob", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        setData(data.result.packages);
        console.log("data", data);
    })
}, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};