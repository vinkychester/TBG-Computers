import styled from "styled-components";
// app ui
import Heading from "../ui/Heading";

const StyledPdfIframe = styled.div`
    margin-top: 3rem;
`;

function PdfIframe({ url }) {
    return (
        <StyledPdfIframe>
            <Heading as="h4">View PDF</Heading>
            <iframe
                src={url}
                width="100%"
                height="630px"
                loading="lazy"
                title="PDF-file"
            ></iframe>
        </StyledPdfIframe>
    )
}

export default PdfIframe;