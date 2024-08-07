import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Header = lazy(() => import("../components/Header"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Header />
    </Suspense>
  );
};

export default Home;
