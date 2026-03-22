// All route JSX lives here — App.tsx is already not a pure component file
// (it exports a component AND creates a router), so React Refresh is fine with it.

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LazyPage } from "./routes/PageLoader";

import {
  NepaTrekking,
  NepalTours,
  PeakClimbing,
  Tibet,
  Bhutan,
  TravelGuide,
  About,
  Contact,
  PackageDetail,
} from "./routes/routes";

// ─── Router ───────────────────────────────────────────────────────────────────
//
//   /                  → Home            (eager)
//   /nepal-trekking    → NepaTrekking    (lazy)
//   /nepal-tours       → NepalTours      (lazy)
//   /peak-climbing     → PeakClimbing    (lazy)
//   /tibet             → Tibet           (lazy)
//   /bhutan            → Bhutan          (lazy)
//   /travel-guide      → TravelGuide     (lazy)
//   /about             → About           (lazy)
//   /contact           → Contact         (lazy)
//   /package/:slug     → PackageDetail   (lazy, dynamic)
//   *                  → NotFound        (eager)

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true,            element: <Home />                                },
      { path: "nepal-trekking", element: <LazyPage component={NepaTrekking}  /> },
      { path: "nepal-tours",    element: <LazyPage component={NepalTours}    /> },
      { path: "peak-climbing",  element: <LazyPage component={PeakClimbing}  /> },
      { path: "tibet",          element: <LazyPage component={Tibet}         /> },
      { path: "bhutan",         element: <LazyPage component={Bhutan}        /> },
      { path: "travel-guide",   element: <LazyPage component={TravelGuide}   /> },
      { path: "about",          element: <LazyPage component={About}         /> },
      { path: "contact",        element: <LazyPage component={Contact}       /> },
      { path: "package/:slug",  element: <LazyPage component={PackageDetail} /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}