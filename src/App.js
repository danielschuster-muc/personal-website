import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { CircularProgress, createTheme, CssBaseline } from "@mui/material";

import Layout from "./components/layout/Layout";

import ExternalRedirect from "./pages/ExternalRedirect";
import LandingPage from "./pages/LandingPage";

const About = lazy(() => import("./pages/info/About"));
const Imprint = lazy(() => import("./pages/info/Imprint"));
const NotFound = lazy(() => import("./pages/NotFound"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#0288d1",
    },
    secondary: {
      main: "#fb8c00",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Suspense
          fallback={<CircularProgress color="secondary" className="centered" />}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/imprint" element={<Imprint />} />

            {/* <Route path="/test" element={<TestPage />} /> */}

            <Route
              path="/github"
              element={
                <ExternalRedirect link="https://github.com/danielschuster-muc" />
              }
            />
            <Route
              path="/linkedin"
              element={
                <ExternalRedirect link="https://www.linkedin.com/in/danielschuster-muc/" />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
