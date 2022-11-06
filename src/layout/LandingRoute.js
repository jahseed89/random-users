import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BrandLoader from "../components/brand-loader/BrandLoader";
import Landing from "./Landing";
import {
  HOME_ROUTE,
  ERROR_BOUNDRY_ROUTE,
  LANDING_ROUTE,
  USERS_ROUTE,
} from "../constants/urls/Landing";
import ErrorBoundry from "../pages/ErrorBoundry";

const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));


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
          <Route path={ERROR_BOUNDRY_ROUTE} element={<ErrorBoundry />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default LandingRoute;
