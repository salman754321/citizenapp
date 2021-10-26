import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";

export default function LoginNavigation() {
    const Stack = createNativeStackNavigator();
    return (
      <>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
          <Stack.Screen name="Register" component={Register}   options={{headerShown:false}}  />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}   options={{headerShown:false}}  />
      </Stack.Navigator>
      </>
    )
}
