import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BrandLoader from "../components/brand-loader/BrandLoader";
import Landing from "./Landing";
import {
  HOME_ROUTE,
  ABOUT_PAGE_ROUTE,
  LANDING_ROUTE,
  USERS_ROUTE,
} from "../constants/urls/Landing";
import Users from "../pages/Users";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const LandingRoute = () => {
  return (
    <Suspense fallback={<BrandLoader />}>
      <Routes>
        <Route path={LANDING_ROUTE} element={<Landing />}>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={USERS_ROUTE} element={<Users />} />

          {/* <Route
              path={`${HOME_ROUTE}/*`}
              element={<Landing />}
            /> */}
          <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default LandingRoute;
