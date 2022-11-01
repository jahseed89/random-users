import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BrandLoader from "../components/brand-loader/BrandLoader";
import Landing from "./Landing";
import {
  HOME_ROUTE,
  ABOUT_PAGE_ROUTE,
  LANDING_ROUTE,
  USERS_ROUTE,
} from "../constants/urls/Landing";

const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const LandingRoute = () => {
  return (
    <Suspense fallback={<BrandLoader />}>
      <Routes>
        <Route path={LANDING_ROUTE} element={<Landing />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={USERS_ROUTE} element={<Users />} />
          <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />
          
        </Route>
      </Routes>
    </Suspense>
  );
};
export default LandingRoute;
