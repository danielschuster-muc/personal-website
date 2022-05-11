import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import LandingPage from "./pages/LandingPage";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const About = React.lazy(() => import("./pages/info/About"));
const LegalNotice = React.lazy(() => import("./pages/info/LegalNotice"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
