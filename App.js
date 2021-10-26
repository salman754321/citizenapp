import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginNavigation from './Screens/LoginNavigation';



export default function App() {

 

  return (
    
    <SafeAreaProvider>
 <NavigationContainer>
   
      <LoginNavigation />
 </NavigationContainer>
  </SafeAreaProvider>
  
  );
}

