import StyledButton from "../../ui/Button";
// app hooks
import {useSendUpload} from "./useSendUpload";

function UploadsItem({file}) {
    const {id, file_name, file_path, created_at} = file;

    const {sendFileMutation, isSending} = useSendUpload();

    function handleSendFile(id) {
        sendFileMutation(id);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{file_name}</td>
            <td>{file_path}</td>
            <td>{created_at}</td>
            <td><StyledButton onClick={() => handleSendFile(id)} disabled={isSending}>Send</StyledButton></td>
        </tr>
    )
}

export default UploadsItem