import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { BackHandler, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RoleSelectScreen } from './src/screens/RoleSelectScreen';
import { SplashScreen } from './src/screens/SplashScreen';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'role'>('splash');

  const statusBarStyle = useMemo(() => {
    return screen === 'splash' ? 'light' : 'dark';
  }, [screen]);

  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screen === 'role') {
        setScreen('splash');
        return true;
      }
      return false;
    });

    return () => subscription.remove();
  }, [screen]);

  return (
    <SafeAreaProvider>
      <StatusBar style={statusBarStyle} />
      {screen === 'splash' ? (
        <SplashScreen onGetStarted={() => setScreen('role')} />
      ) : (
        <RoleSelectScreen />
      )}
    </SafeAreaProvider>
  );
}
