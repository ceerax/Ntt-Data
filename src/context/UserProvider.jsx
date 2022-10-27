import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

 const [user, setUser] = useState()
console.log(user);

  return (
    <UserContext.Provider value={{setUser}}>
        {children}
    </UserContext.Provider>
  )
}
