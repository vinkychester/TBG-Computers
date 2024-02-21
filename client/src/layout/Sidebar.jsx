import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {HiOutlineHome, HiOutlineUsers, HiOutlineDocumentText} from "react-icons/hi";

const StyledSidebar = styled.nav`
    background-color: var(--color-grey-dark-1);
    height: calc(100vh - 7rem);
    
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 15%;

    // PUSH TEXT TO BOTTOM
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledNavigation = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        color: var(--color-grey-light-1);
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
        transition: all 0.3s;

        display: flex;
        align-items: center;

        & svg {
            width: 1.75rem;
            height: 1.75rem;
            margin-right: 2rem;
        }
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-primary);
    }
`;

const StyledLegal = styled.div`
    font-size: 1.2rem;
    color: var(--color-grey-dark-4);
    text-align: center;
    padding: 2.5rem;
`;


function Sidebar() {
    return (
        <StyledSidebar>
            <StyledNavigation>
                <StyledNavLink to="/">
                    <HiOutlineHome/>
                    <span>Home</span>
                </StyledNavLink>
                <StyledNavLink to="/users">
                    <HiOutlineUsers />
                    <span>Users</span>
                </StyledNavLink>
                <StyledNavLink to="/uploads">
                    <HiOutlineDocumentText  />
                    <span>Files</span>
                </StyledNavLink>
            </StyledNavigation>
            <StyledLegal>
                &copy; All rights reserved.
            </StyledLegal>
        </StyledSidebar>
    )
}

export default Sidebar;