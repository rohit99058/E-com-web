import { createContext, useState } from "react";

export let UserContext = createContext();

function UserProvider(props) {

    let [name,  setName] = useState(null)
    
  return <UserContext.Provider value={{name, setName}}>{props.children}</UserContext.Provider>;
}

export default UserProvider