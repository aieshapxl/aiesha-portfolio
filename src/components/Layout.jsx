import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />

      <main className="flex-1 min-h-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
