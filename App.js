import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Router from './src/system/router';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router/>
    </>
  );
}

