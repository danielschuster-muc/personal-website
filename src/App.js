import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import ExternalRedirect from "./pages/ExternalRedirect";
import LandingPage from "./pages/LandingPage";

const About = lazy(() => import("./pages/info/About"));
const LegalNotice = lazy(() => import("./pages/info/LegalNotice"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner centered />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-notice" element={<LegalNotice />} />

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
  );
};

export default App;
