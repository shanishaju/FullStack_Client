
import React, { createContext, useState } from "react"

// 2) create context using createcontext
export const addResponseContext = createContext({})

//for edit
export const editResponseContext = createContext({})


//1)load rfce
function DataShare({ children }) {
  const [addResponse, setAddResponse] = useState({})

  //for edit
  const [editResponse, setEditResponse] = useState({})


  return (
    // to access the value of the context for every components
    <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
      <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
        {children}
      </editResponseContext.Provider>
    </addResponseContext.Provider>
  )
}

export default DataShare