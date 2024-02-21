// app ui
import StyledTable from "../../ui/Table";
import Heading from "../../ui/Heading";
// app features
import UploadsItem from "./UploadsItem";
// app hooks
import {useUploads} from "./useUploads";

function Uploads() {
    const {isLoading, uploads, error} = useUploads();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!uploads || uploads.length === 0) return <Heading as="h2">There are no files yet</Heading>

    return (
        <StyledTable>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Directory</th>
                <th>Created AT</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {uploads && uploads.map((file) => (
                <UploadsItem key={file.id} file={file}/>
            ))}
            </tbody>
        </StyledTable>
    )
}

export default Uploads;