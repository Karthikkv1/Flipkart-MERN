// File created on 01-03-2024 8:22PM

import { createContext, useState } from "react";

 export const DataContext = createContext(null);

 //01-03-2024 10:03PM
const DataProvider = ({children}) =>{ 

    const [account,setAccount] = useState('');

    return(
        <DataContext.Provider value={{
           account,
           setAccount
        }}>
            {children} 
        </DataContext.Provider>
    )

}

export default DataProvider;