import { createContext, useState, useContext, useEffect } from "react";

const LoggedInContext = createContext();


export const useLoggedInContext = () => useContext(LoggedInContext);

export const LoggedInProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState({});

    useEffect(() => {
        const loggedInAs = localStorage.getItem("loggedInAs");

        if (loggedInAs){
            setLoggedIn(JSON.parse(loggedInAs));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("loggedInAs", JSON.stringify(loggedIn))
    }, [loggedIn])

    function isLoggedIn(){
        if (Object.keys(loggedIn).length === 0){
            return false;
        }
        return true;
    } 

    return (
        <LoggedInContext.Provider value={{ loggedIn, setLoggedIn, isLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );

}