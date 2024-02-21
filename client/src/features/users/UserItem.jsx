// app ui
import StyledButton from "../../ui/Button";
// app context
import {useUserContext} from "../../context/UserContext";

function UserItem({user}) {
    const {id, full_name, contact, created_at} = user;
    const {isEditSession, handleChangeEditSession} = useUserContext();

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{full_name}</td>
                <td>{contact}</td>
                <td>{created_at}</td>
                <td>{isEditSession ? "none" :
                    <StyledButton onClick={() => handleChangeEditSession(user)}>Edit</StyledButton>}
                </td>
            </tr>
        </>
    )
}

export default UserItem;