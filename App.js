
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomescreenPage from "./screens/HomescreenPage";
import LessonsPage from "./screens/LessonsPage";
import CookingPage from "./screens/CookingPage";
import SixWeeksPage from "./screens/SixWeeksPage";
import SignUpPage from "./screens/SignUpPage";
import ExplorerPage from "./screens/ExplorerPage";
import PaymentMethod1 from "./screens/PaymentMethod1";
import CourseChosen from "./screens/CourseChosen";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import ChildMinding from "./screens/ChildMinding";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator
          initialRouteName="CourseChosen" // Set the initial page to be displayed
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen
            name="Home"
            component={HomescreenPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LessonsPage"
            component={LessonsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CookingPage"
            component={CookingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SixWeeksPage"
            component={SixWeeksPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExplorerPage"
            component={ExplorerPage}
            options={{ headerShown: false }}
          
          />
          <Stack.Screen
            name="PaymentMethod1"
            component={PaymentMethod1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseChosen"
            component={CourseChosen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contact"
            component={IPhone1415ProMax1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={IPhone1415ProMax}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="ChildMinding"
            component={ChildMinding}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
