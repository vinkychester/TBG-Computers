import GlobalStyles from "../styles/GlobalStyles";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <>
            <GlobalStyles />
            {/*<StyledErrorFallback>*/}
            {/*    <Box>*/}
            {/*        <Heading as="h1">Something went wrong 🧐</Heading>*/}
            {/*        <p>{error.message}</p>*/}
            {/*        <Button size="large" onClick={resetErrorBoundary}>*/}
            {/*            Try again*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*</StyledErrorFallback>*/}
        </>
    );
}

export default ErrorFallback;