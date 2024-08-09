import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Header = lazy(() => import("../components/Header"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </Suspense>
  );
};

export default Home;
