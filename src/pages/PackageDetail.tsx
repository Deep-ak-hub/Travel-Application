// src/pages/PackageDetail.tsx
//
// Receptionist — reads the slug from the URL, finds the data,
// handles 404, then hands everything to PackageLayout.
// This file should stay this thin forever.

import { useParams } from "react-router-dom";
import { trekDetails } from "../config/data";
import PackageLayout from "../layouts/PackageLayout";
import Button from "../components/Button";

function NotFoundState() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-border-dark">404</p>
      <h1 className="text-xl font-bold text-text">Package not found</h1>
      <p className="text-text-muted max-w-sm">
        This trek doesn't exist yet. Check out our other packages.
      </p>
      <div className="flex gap-3">
        <Button variant="primary" href="/nepal-trekking">Browse All Treks</Button>
        <Button variant="outline" href="/">Go Home</Button>
      </div>
    </div>
  );
}

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const trek = slug ? trekDetails[slug] : null;

  if (!trek) return <NotFoundState />;

  return <PackageLayout trek={trek} />;
}