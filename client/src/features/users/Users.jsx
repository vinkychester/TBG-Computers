// app ui
import Heading from "../../ui/Heading";
import StyledTable from "../../ui/Table";
// app hooks
import {useUsers} from "./useUsers";
import UserItem from "./UserItem";

function Users() {
    const {isLoading, users, error} = useUsers();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!users || users.length === 0) return <Heading as="h4">There are no users yet</Heading>

    return (
        <>
            <Heading as="h4">List of users</Heading>
            <StyledTable>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Created AT</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
                </tbody>
            </StyledTable>
        </>
    )
}

export default Users;