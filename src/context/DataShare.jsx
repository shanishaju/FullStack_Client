
import React, { createContext, useState } from "react"

// 2) create context using createcontext
export const addResponseContext = createContext({})

//1)load rfce
function DataShare({ children }) {
  const [addResponse, setAddResponse] = useState({})

  return (
    // to access the value of the context for every components
    <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
      {children}
    </addResponseContext.Provider>
  )
}

export default DataShare