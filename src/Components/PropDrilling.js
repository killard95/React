import {createContext, useContext} from "react";
const UserContext = createContext();
  
  export default function Component1({user}) {
  
    return (
      
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}! in the contexted component`}</h1>
        <Component2 />
        </UserContext.Provider>
    );
  }
  
  export function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  export function Component3({ user }) {
    return (
      <>
        <Component4 user={user} />
      </>
    );
  }
  
  export function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }
  
  export function Component5() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} at the end !`}</h2>
      </>
    );
  }