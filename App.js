import React from "react";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/Auth";
import LoadingScreen from "./src/screens/LoadingScreen";

import { useFonts, Caveat_700Bold } from "@expo-google-fonts/caveat";

import {
  Signika_600SemiBold,
  Signika_400Regular,
  Signika_500Medium,
} from "@expo-google-fonts/signika";

// import { Caveat_700Bold } from "@expo-google-fonts/caveat";

const App = () => {
  let [fontsLoaded] = useFonts({
    Caveat_700Bold,
    Signika_600SemiBold,
    Signika_400Regular,
    Signika_500Medium,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      {/* <StatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"}/> */}
      <Router />
    </AuthProvider>
  );
};

export default App;
