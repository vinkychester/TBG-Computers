import {Outlet} from "react-router-dom";
import styled from "styled-components";
// app layouts
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
    background-color: var(--color-grey-light-2);
    min-height: 50rem;
`;

const StyledContent = styled.div`
    display: flex;
`;

const StyledMain = styled.main`
    padding: 2rem 3rem;
    flex: 1; // take all available space
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <StyledContent>
                <Sidebar/>
                <StyledMain>
                    <Outlet/>
                </StyledMain>
            </StyledContent>
        </StyledAppLayout>
    )
}

export default AppLayout;