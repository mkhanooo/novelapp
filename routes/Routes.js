import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import NavTabs from "./NavTabs";
import RewardsTopTabs from "./RewardsTopTabs";

// import Animated from "../screens/AnimatedScreen";
// Screen Links
import DetailPage from "../screens/NovelDetail/index";
import MorePage from "../screens/MorePage/index";
import LoginScreen from "../screens/LoginScreen/index";
import ReadingHistory from "../screens/Library/ReadingHistory";

// Mine Pages
import Setting from "../screens/Mine/Setting";
import PrimeMembership from "../screens/Mine/Setting/PrimeMembership";
import HelpCenter from "../screens/Mine/HelpCenter";
import AboutNovelCat from "../screens/Mine/Setting/AboutNovelCat";
import Privacy from "../screens/Mine/Setting/AboutNovelCat/Privacy";
import Terms from "../screens/Mine/Setting/AboutNovelCat/Terms";
import Notifications from "../screens/Mine/Setting/Notifications";
import System from "../screens/Mine/Setting/Notifications/System";
import Comments from "../screens/Mine/Setting/Notifications/Comments";
import Follow from "../screens/Mine/Setting/Notifications/Follow";
import LiveChat from "../screens/Mine/Setting/LiveChat";
import Recharge from "../screens/Mine/Setting/Recharge";
import RechargeHistory from "../screens/Mine/Setting/RechargeHistory";
import MyUnlocked from "../screens/Mine/Setting/MyUnlocked";
import VouchersHistory from "../screens/Mine/Setting/VouchersHistory";
import BecomeWriter from "../screens/Mine/Setting/WriteMyStory/BecomeWriter";
import ContactUs from "../screens/Mine/Setting/WriteMyStory/ContactUs";
import RegisterNovel from "../screens/Mine/Setting/WriteMyStory/RegisterNovel";
import AddNovel from "../screens/Mine/Setting/WriteMyStory/AddNovel";
import Profile from "../screens/Mine/Setting/Profile";

// Headers
import DetailsHeader from "../components/DetailsHeader";
import RewardsHeader from "../components/RewardsHeader";
import ReadingHistoryHeader from "../components/ReadingHistoryHeader";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="tabNav"
          screenOptions={({ route }) => ({
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
          })}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="tabNav"
            component={NavTabs}
          />

          <Stack.Screen
            name="More"
            options={({ route }) => ({
              headerShown: true,
              title: route.params ? route.params.name : "More",
            })}
            component={MorePage}
          />
          <Stack.Screen
            name="Setting"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Setting}
          />
          <Stack.Screen
            name="Profile"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Profile}
          />
          <Stack.Screen
            name="RechargeHistory"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={RechargeHistory}
            options={{ title: "Recharge History" }}
          />
          <Stack.Screen
            name="VouchersHistory"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={VouchersHistory}
            options={{ title: "Vouchers History" }}
          />
          <Stack.Screen
            name="MyUnlocked"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={MyUnlocked}
            options={{ title: "My Unlocked" }}
          />

          <Stack.Screen
            name="Recharge"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Recharge}
          />
          <Stack.Screen
            name="PrimeMembership"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={PrimeMembership}
            options={{ title: "Prime Membership" }}
          />
          <Stack.Screen
            name="BecomeWriter"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={BecomeWriter}
            options={{ title: "Become Writer" }}
          />
          <Stack.Screen
            name="ContactUs"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={ContactUs}
            options={{ title: "Contact Us" }}
          />
          <Stack.Screen
            name="RegisterNovel"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={RegisterNovel}
            options={{ title: "Register Novel" }}
          />
          <Stack.Screen
            name="AddNovel"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={AddNovel}
            options={{ title: "Add Novel" }}
          />
          <Stack.Screen
            name="Notifications"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Notifications}
          />
          <Stack.Screen
            name="System"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={System}
          />
          <Stack.Screen
            name="Comments"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Comments}
          />
          <Stack.Screen
            name="Follow"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={Follow}
          />
          <Stack.Screen
            name="LiveChat"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={LiveChat}
            options={{ title: "Live Chat" }}
          />
          <Stack.Screen
            name="HelpCenter"
            options={({ route }) => ({
              headerShown: true,
            })}
            component={HelpCenter}
            options={{ title: "Help Center" }}
          />
          <Stack.Screen
            name="AboutNovelCat"
            options={({ route }) => ({
              headerShadowVisible: false,
              headerShown: false,
            })}
            component={AboutNovelCat}
          />
          <Stack.Screen
            name="Privacy"
            options={({ route }) => ({
              headerShadowVisible: false,
              headerShown: false,
            })}
            component={Privacy}
          />
          <Stack.Screen
            name="Terms"
            options={({ route }) => ({
              headerShadowVisible: false,
              headerShown: false,
            })}
            component={Terms}
          />
          <Stack.Screen
            options={({ route, navigation }) => ({
              headerShown: false,
              headerShadowVisible: false,
            })}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={({ route, navigation }) => ({
              headerShown: true,
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitle: () => (
                <ReadingHistoryHeader navigation={navigation} />
              ),
            })}
            name="ReadingHistory"
            component={ReadingHistory}
          />
          <Stack.Screen
            name="Rewards"
            component={RewardsTopTabs}
            options={({ route, navigation }) => ({
              headerTitle: () => <RewardsHeader navigation={navigation} />,
              headerStyle: {
                backgroundColor: "rgba(65, 58, 202, 1)",
                height: 100,
              },
              headerShown: true,
              headerShadowVisible: false,
              headerBackVisible: false,
            })}
          />
          {/* <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="animated"
            component={Animated}
          /> */}

          <Stack.Screen
            name="Details"
            component={DetailPage}
            options={({ route, navigation }) => ({
              headerTitle: () => <DetailsHeader navigation={navigation} />,

              headerStyle: {
                backgroundColor: "rgba(52, 91, 99, 1)",
                height: 100,
              },
              headerBackVisible: false,
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
