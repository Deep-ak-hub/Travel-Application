// src/routes/routes.tsx
// Only exports `routes` (a plain array) — no components here.
// This satisfies react-refresh/only-export-components.

// import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// import { LazyPage } from "./PageLoader";

// ─── Lazy page imports ────────────────────────────────────────────────────────

// const NepaTrekking  = lazy(() => import("../pages/NepaTrekking"));
// const NepalTours    = lazy(() => import("../pages/NepalTours"));
// const PeakClimbing  = lazy(() => import("../pages/PeakClimbing"));
// const Tibet         = lazy(() => import("../pages/Tibet"));
// const Bhutan        = lazy(() => import("../pages/Bhutan"));
// const TravelGuide   = lazy(() => import("../pages/TravelGuide"));
// const About         = lazy(() => import("../pages/About"));
// const Contact       = lazy(() => import("../pages/Contact"));
// const PackageDetail = lazy(() => import("../pages/PackageDetail"));

// ─── Route tree ───────────────────────────────────────────────────────────────

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true,               element: <Home /> },
    //   { path: "nepal-trekking",    element: <LazyPage component={NepaTrekking}  /> },
    //   { path: "nepal-tours",       element: <LazyPage component={NepalTours}    /> },
    //   { path: "peak-climbing",     element: <LazyPage component={PeakClimbing}  /> },
    //   { path: "tibet",             element: <LazyPage component={Tibet}         /> },
    //   { path: "bhutan",            element: <LazyPage component={Bhutan}        /> },
    //   { path: "travel-guide",      element: <LazyPage component={TravelGuide}   /> },
    //   { path: "about",             element: <LazyPage component={About}         /> },
    //   { path: "contact",           element: <LazyPage component={Contact}       /> },
    //   { path: "package/:slug",     element: <LazyPage component={PackageDetail} /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];