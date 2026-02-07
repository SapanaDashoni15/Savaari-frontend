import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { SplashIllustration } from '../components/SplashIllustration';
import { SavaariLogo } from '../components/SavaariLogo';
import { colors } from '../theme/colors';

type Props = {
  onGetStarted?: () => void;
};

export const SplashScreen = memo(function SplashScreen({ onGetStarted }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.backgroundTop, colors.backgroundBottom]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        <View style={[styles.header, { paddingTop: Math.max(8, insets.top) }]}>
          <SavaariLogo />
        </View>

        <View style={styles.center}>
          <View style={styles.illustrationWrap}>
            <SplashIllustration />
          </View>

          <Text style={styles.title}>AUTO BOOKING</Text>
          <Text style={styles.subtitle}>First open Mobility app</Text>

          <Pressable
            onPress={onGetStarted}
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </Pressable>

          <View style={styles.footerTextWrap}>
            <Text style={styles.footerText}>
              App by the drivers for the people.{"\n"}
              100% direct payment to drivers.
            </Text>
            <Text style={styles.footerHeadline}>
              Book an auto with Zero commission
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 18,
    paddingBottom: 6,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  illustrationWrap: {
    marginBottom: 22,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.0,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18,
    color: colors.textSecondary,
    fontSize: 12,
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.brandGreen,
    paddingHorizontal: 34,
    paddingVertical: 14,
    borderRadius: 26,
    minWidth: 190,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: colors.textPrimary,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  footerTextWrap: {
    marginTop: 22,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 14,
  },
  footerHeadline: {
    marginTop: 10,
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
