// // 1. Create the file

// import { Link } from "react-router-dom";

// // src/pages/Reviews.tsx
// export default function Reviews() { ... }

// // 2. Add ONE line to routes.tsx
// const Reviews = lazy(() => import("../pages/Reviews"));
// { path: "reviews", element: <LazyPage component={Reviews} /> },

// // 3. Link to it anywhere
// <Link to="/reviews">Reviews</Link>