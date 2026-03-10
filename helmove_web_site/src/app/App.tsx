import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AppContent() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split("-")[0] || "en";
    document.documentElement.lang = lang;
    
    // Global fix for Turkish uppercase "İ" - only for Turkish language
    if (lang === 'tr') {
      document.body.style.fontLanguageOverride = '"TRK"';
      document.body.style.fontFeatureSettings = '"ss01", "ss02", "cv01", "cv02", "locl" 1';
    } else {
      document.body.style.fontLanguageOverride = 'normal';
      document.body.style.fontFeatureSettings = '"ss01", "ss02", "cv01", "cv02"';
    }
  }, [i18n.language]);

  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppContent />;
}
