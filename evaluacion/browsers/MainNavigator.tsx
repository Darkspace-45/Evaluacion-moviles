import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bienvenida" component={WelcomeScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    );
};


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro de Compra" component={Screen1} />
            <Tab.Screen name="Ver Registros" component={Screen2} />
            <Tab.Screen name="Editar Registros" component={Screen3} />
            <Tab.Screen name="Apis" component={Screen4} />
        </Tab.Navigator>
    );
};


export default function MainNavigator() {
    return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
)};