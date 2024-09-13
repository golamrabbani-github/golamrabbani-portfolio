import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// All Pages
import NavBer from "./NavBer/Navber";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Services from "./Pages/ServicesPage/Services";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Footer/Footer";

// All Pages

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <NavBer />
            <LandingPage />
          </>
        ),
      },
      {
        path: "/aboutme",
        element: (
          <>
            <NavBer />
            <AboutMe />
            <Footer />
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            <NavBer />
            <Services />
            <Footer />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <NavBer />
            <Contact />
            <Footer />
          </>
        ),
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      },
    ],

    { basename: "/golamrabbani-portfolio" }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
