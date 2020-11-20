import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";

import LoginPage from "./LoginPage";
import NewsPage from "./NewsPage";
import TreatmentPage from "./components/TreatmentComponents/TreatmentPage";
import TreatmentGene1 from "./components/TreatmentComponents/TreatmentGene1";
import TreatmentGene2 from "./components/TreatmentComponents/TreatmentGene2";
import InfoPage from "./InfoPage";
import TrialsPage from "./TrialsPage";
import AuthContext from "./contexts/AuthContext";

function getHeaderTitle(route) {
      return getFocusedRouteNameFromRoute(route) ?? 'Feed';
   
}

const NewsStack = createStackNavigator();
export function NewsScreen() {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={NewsPage} />
        </NewsStack.Navigator>
    )
}

function getTreatmentHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'SelectPage';
  
    switch (routeName) {
      case 'SelectPage':
        return 'Variant';
      case 'Gene1':
        return 'Tried Treatments';
      case 'Gene2':
        return 'Tried Treatments';
    }
  }


const TreatmentStack = createStackNavigator();
export function TreatmentScreen() {
    return (
        <TreatmentStack.Navigator initialRouteName="SelectPage">
                <TreatmentStack.Screen name="SelectPage" component={TreatmentPage} options={{ title: 'Variant' }} />
                <TreatmentStack.Screen name="Gene1" component={TreatmentGene1} options={{ title: 'Tried Treatments' }}/>
                <TreatmentStack.Screen name="Gene2" component={TreatmentGene2} options={{ title: 'Tried Treatments' }}/>
        </TreatmentStack.Navigator>
    )
}

const TrialsStack = createStackNavigator();
export function TrialsScreen() {
    return (
        <TrialsStack.Navigator>
            <TrialsStack.Screen name="Trials" component={TrialsPage} />
        </TrialsStack.Navigator>
    )
}

const InfoStack = createStackNavigator();
export function InfoScreen() {
    return (
        <InfoStack.Navigator>
            <InfoStack.Screen name="Info" component={InfoPage} />
        </InfoStack.Navigator>
    )
}

const MainTab = createBottomTabNavigator();
export function MainScreen() {
    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "News":
                            iconName = "ios-list-box";
                            break;
                        case "Treatment":
                            iconName = "ios-beaker";
                            break;
                        case "Trials":
                            iconName = "md-medkit";
                            break;
                        case "Info":
                            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                            break;
                        default:
                            console.log("Invalid focused tab");
                            throw "Invalid focused tab";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <MainTab.Screen name="News" component={NewsScreen} />
            <MainTab.Screen name="Treatment" component={TreatmentScreen}    options={({ route }) => ({
    headerTitle: getTreatmentHeaderTitle(route),
  })}/>
            <MainTab.Screen name="Trials" component={TrialsScreen} />
            <MainTab.Screen name="Info" component={InfoScreen} />
        </MainTab.Navigator>
    )
}

const RootStack = createStackNavigator();
export default function App() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "SignIn":
                    return {
                        ...prevState,
                        hasAuth: true,
                    };
                default:
                    console.log("Invalid auth action");
                    throw "Invalid auth action";
            }
        },
        {
            hasAuth: false,
        }
    );

    return (
        <AuthContext.Provider
            value={{
                signIn: data => dispatch({ type: "SignIn" }),
            }}
        >
            <NavigationContainer>
                <RootStack.Navigator>
                    {state.hasAuth ? (
                        <RootStack.Screen
                            name="Landing"
                            component={MainScreen}
                            options={({ route }) => ({
                                headerTitle: getHeaderTitle(route),
                            })}
                        />
                    ) : (
                        <RootStack.Screen name="Login" component={LoginPage} />
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
