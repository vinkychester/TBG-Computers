import styled from "styled-components";

const StyledTable = styled.table`
    font-size: 1.6rem;
    border-collapse: collapse;
    width: 50%;
    margin: 0 auto;

    & td, & th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 0.8rem;
    }

    & tr:nth-child(even) {
        background-color: #dddddd;
    }
`;

export default StyledTable;