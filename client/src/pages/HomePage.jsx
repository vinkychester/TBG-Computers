import {useState} from "react";
import styled from "styled-components";
// app layouts
import PdfIframe from "../layout/PdfIframe";
// app ui
import Heading from "../ui/Heading";
// app services
import {useUploadFile} from "../features/uploads/useUploadFile";

const StyledHomeWrapper = styled.div`
`;

function HomePage() {
    const [url, setUrl] = useState();
    const {uploadMutation, isLoading} = useUploadFile();

    function handleUpload(event) {
        const files = event.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));

        const data = new FormData();
        data.append("file", files[0])
        uploadMutation(data);
    }

    return (
        <StyledHomeWrapper>
            <Heading as="h2">
                Upload pdf file to view
            </Heading>
            <input type="file" accept=".pdf" onChange={handleUpload} disabled={isLoading}/>
            <PdfIframe url={url}/>
        </StyledHomeWrapper>
    )
}

export default HomePage;