import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Header = lazy(() => import("../components/Header"));
const Skills = lazy(() => import("../components/Skills"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Header />
      <Skills />
    </Suspense>
  );
};

export default Home;
