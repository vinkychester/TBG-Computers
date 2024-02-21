import styled from "styled-components";

const StyledHeader = styled.header`
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: 1px solid var(--color-grey-light-2);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogo = styled.img`
    height: 3.25rem;
    margin-left: 2rem;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src="logo.png" />
        </StyledHeader>
    )
}

export  default Header;