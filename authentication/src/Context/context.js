import { createContext, useContext } from "react";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
   
    return context;
  }
   
  export const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
   
    return context;
  }