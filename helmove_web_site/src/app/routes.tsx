import { createBrowserRouter, Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { SupportCenter } from "./pages/SupportCenter";
import { DataDeletion } from "./pages/DataDeletion";
import { Login } from "./pages/Login";
import { AppLinks } from "./pages/AppLinks";

function Root() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF5500]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-use", Component: TermsOfUse },
      { path: "support-center", Component: SupportCenter },
      { path: "data-deletion", Component: DataDeletion },
      { path: "login", Component: Login },
      { path: "app-links", Component: AppLinks },
    ],
  },
]);