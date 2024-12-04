import Footer from "@components/Footer";
import Header from "@components/Header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { DataContextProvider } from "@context/DataContext";
import { lightTheme, darkTheme } from "../designTokens";
function Layout() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <DataContextProvider>
        <Header setMode={setMode} mode={mode} />
        <Outlet />
      </DataContextProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
