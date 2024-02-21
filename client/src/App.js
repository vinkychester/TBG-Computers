import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// app pages
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UploadsPage from "./pages/UploadsPage";
// app layouts
import AppLayout from "./layout/AppLayout";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Time saved data in cashe
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        {/*<Route index element={<Navigate replace to="/"/>}/>*/}
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/users" element={<UsersPage/>}/>
                        <Route path="/uploads" element={<UploadsPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
