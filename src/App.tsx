import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SalesAppOneNavigator from './navigation/SalesAppOneNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SalesAppOneNavigator />
    </NavigationContainer>
  );
};

export default App;
