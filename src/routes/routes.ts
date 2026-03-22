// Pure data file. No components, no JSX = no React Refresh warning.

import { lazy } from "react";
import type { ComponentType } from "react";

// ─── Lazy page imports ────────────────────────────────────────────────────────

export const NepaTrekking  = lazy(() => import("../pages/NepalTrekking"));
export const NepalTours    = lazy(() => import("../pages/NepalTours"));
export const PeakClimbing  = lazy(() => import("../pages/PeakClimbing"));
export const Tibet         = lazy(() => import("../pages/Tibet"));
export const Bhutan        = lazy(() => import("../pages/Bhutan"));
export const TravelGuide   = lazy(() => import("../pages/TravelGuide"));
export const About         = lazy(() => import("../pages/About"));
export const Contact       = lazy(() => import("../pages/Contact"));
export const PackageDetail = lazy(() => import("../pages/PackageDetail"));

// Export type so App.tsx can use it
export type { ComponentType };