// app ui
import Heading from "../ui/Heading";
// app features
import CreateUser from "../features/users/CreateUser";
import Users from "../features/users/Users";
// app context
import {UserContextProvider} from "../context/UserContext";


function UsersPage() {
    return (
        <>
            <Heading as="h2">Users</Heading>
            <UserContextProvider>
                <CreateUser/>
                <Users/>
            </UserContextProvider>
        </>
    )
}

export default UsersPage;