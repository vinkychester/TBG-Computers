import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 1.5rem;
    border: none;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 100px;
    padding: 1rem 3rem;
    background-image: linear-gradient(
            to right,
            var(--color-primary-light),
            var(--color-primary-dark)
    );
    color: #fff;

    &:hover {
        background-image: linear-gradient(
                to left,
                var(--color-primary-light),
                var(--color-primary-dark)
        );
    }
`;

export default StyledButton;