import React, { useState, useEffect } from 'react';
import Navigation  from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){

  return(
    <NavigationContainer>
        <Navigation></Navigation>
    </NavigationContainer>
  );
}