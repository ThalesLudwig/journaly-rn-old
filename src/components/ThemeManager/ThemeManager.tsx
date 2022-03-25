import React from "react";
import { connect } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import THEMES, { THEME_ENUM } from "../../constants/theme";

const ThemeManager = ({ theme, children }) => {
  const themeSwitcher = () => {
    switch (theme.value) {
      case THEME_ENUM.DARK:
        return THEMES.DARK;
      case THEME_ENUM.LIGHT:
        return THEMES.LIGHT;
      default:
        return THEMES.LIGHT;
    }
  };

  const statusBarSwitcher = () => {
    switch (theme.value) {
      case THEME_ENUM.DARK:
        return "light";
      case THEME_ENUM.LIGHT:
        return "dark";
      default:
        return "auto";
    }
  };

  return (
    <ThemeProvider theme={themeSwitcher()}>
      <StatusBar style={statusBarSwitcher()} />
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(ThemeManager);