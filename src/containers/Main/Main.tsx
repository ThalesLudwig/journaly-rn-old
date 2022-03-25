import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import ThemeManager from "../../components/ThemeManager/ThemeManager";
import * as NavigationBar from "expo-navigation-bar";
import { View, Text, Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperTheme, Provider as PaperProvider } from "react-native-paper";
import { useTheme } from "../../hooks/useTheme";

const Main = () => {
  const theme = useTheme();

  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync(theme.NAVIGATION);
  }

  const renderContent = () => {
    const isLoggedIn = true;
    const nativeTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "transparent",
        border: "transparent",
      },
    };
    const paperTheme = {
      ...PaperTheme,
      roundness: 10,
      colors: {
        ...PaperTheme.colors,
        primary: theme.PRIMARY,
        accent: theme.PRIMARY,
        text: theme.TEXT,
        background: theme.BACKGROUND,
        disabled: theme.DISABLED,
        placeholder: theme.PLACEHOLDER,
        surface: theme.CARD,
      },
    };

    if (isLoggedIn) {
      return (
        <NavigationContainer theme={nativeTheme}>
          <PaperProvider theme={paperTheme}>
            <Navigator />
          </PaperProvider>
        </NavigationContainer>
      );
    } else {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  };

  return <ThemeManager>{renderContent()}</ThemeManager>;
};

export default Main;
