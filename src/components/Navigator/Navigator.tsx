import Icon from "@expo/vector-icons/Feather";
import Home from "../../containers/Home/Home";
import New from "../../containers/New/New";
import Edit from "../../containers/Edit/Edit";
import Settings from "../../containers/Settings/Settings";
import Calendar from "../../containers/Calendar/Calendar";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { useTheme } from "../../hooks/useTheme";
import { themeType } from "../../types/themeType";
import Entry from "../../containers/Entry/Entry";

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();
const ICON_SIZE = 24;

const getRouteIcon = (route: string, themeColor: string) => ({
  tabBarIcon: ({ focused, color }) => {
    switch (route) {
      case "Home":
        return <Icon name="home" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      case "Settings":
        return <Icon name="settings" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      case "New":
        return <Icon name="plus-circle" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
      default:
        return <Icon name="home" size={ICON_SIZE} color={focused ? color : themeColor} focused={focused} />;
    }
  },
});

function HomeNavigator() {
  const theme: themeType = useTheme();
  const headerOptions = {
    headerStyle: { backgroundColor: theme.BACKGROUND },
    headerTitleStyle: { color: theme.TEXT },
    headerTintColor: theme.TEXT,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Journal" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Calendar" component={Calendar} options={headerOptions} />
      <Stack.Screen name="Edit" component={Edit} options={headerOptions} />
      <Stack.Screen name="Entry" component={Entry} options={headerOptions} />
    </Stack.Navigator>
  );
}

const BottomNavigator = () => {
  const theme: themeType = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{ activeBackgroundColor: theme.PRIMARY }}
      appearance={
        {
          tabBarBackground: theme.NAVIGATION,
          bottomPadding: 15,
          topPadding: 15,
          dotSize: "small",
          whenActiveShow: "icon-only",
        } as Object
      }
    >
      <Tab.Screen name="Home" component={HomeNavigator} options={getRouteIcon("Home", theme.ICONS)} />
      <Tab.Screen name="New" component={New} options={getRouteIcon("New", theme.ICONS)} />
      <Tab.Screen name="Settings" component={Settings} options={getRouteIcon("Settings", theme.ICONS)} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
