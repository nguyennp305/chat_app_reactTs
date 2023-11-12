import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
import { HeaderAllPages } from "./headers-al-pages/HeaderAllPages";
import { SelectableTheme } from "../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../utils/themes";
import { LayoutPage } from "../utils/styles";

export const AuthenticatedRoute: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();
  const { loading, user } = useAuth();
  const storageTheme = localStorage.getItem("theme") as SelectableTheme;
  const { theme } = useSelector((state: RootState) => state.settings);

  if (loading) {
    return <div>loading</div>;
  }
  if (user)
    return (
      <ThemeProvider
        theme={
          storageTheme
            ? storageTheme === "dark"
              ? DarkTheme
              : LightTheme
            : theme === "dark"
            ? DarkTheme
            : LightTheme
        }
      >
        <HeaderAllPages />
        <LayoutPage>{children}</LayoutPage>
      </ThemeProvider>
    );
  return <Navigate to="/login" state={{ from: location }} replace />;
};
