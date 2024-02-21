import {createContext, useContext, useState} from "react";

const UserContext = createContext();

function UserContextProvider({children}) {
    const [isEditSession, setIsEditSession] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});

    function handleChangeEditSession(user) {
        setIsEditSession((state) => !state);
        setUserToEdit(user);
    }

    return (
        <UserContext.Provider value={{isEditSession, handleChangeEditSession, userToEdit}}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined)
        throw new Error("UserContext was used outside of UserContextProvider");
    return context;
}

export {UserContextProvider, useUserContext};