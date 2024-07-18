import { persistor, store } from "@/services/Store";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <SafeAreaView>
            <View>
              <Text>Loading...</Text>
            </View>
          </SafeAreaView>
        }
        persistor={persistor}
      >
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="details/[id]"
      
            options={{
              title: "Task Details",
              headerBackVisible: false,
              headerLeft: () => <Ionicons name="arrow-back" size={25} onPress={()=>router.back()} />,
            }}
          />
        </Stack>
      </PersistGate>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </Provider>
  );
}
