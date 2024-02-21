// app ui
import Heading from "../ui/Heading";
// app features
import Uploads from "../features/uploads/Uploads";

function UploadsPage() {
    return (
        <>
            <Heading as="h4">Pdf files</Heading>
            <Uploads/>
        </>
    )
}

export default UploadsPage;