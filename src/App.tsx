import React from 'react';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { Routers } from './main/routers';

export default function App() {
  const statusBarProps: StatusBarProps = {
    style: 'auto',
    networkActivityIndicatorVisible: true,
  };

  return (
    <>
      <StatusBar {...statusBarProps} />
      <Routers />
    </>
  );
}
