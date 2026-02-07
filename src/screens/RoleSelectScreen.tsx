import { memo, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { SavaariLogo } from '../components/SavaariLogo';
import { colors } from '../theme/colors';

type Role = 'driver' | 'passenger';

type Props = {
  onContinue?: (role: Role) => void;
};

export const RoleSelectScreen = memo(function RoleSelectScreen({ onContinue }: Props) {
  const insets = useSafeAreaInsets();
  const [role, setRole] = useState<Role>('passenger');

  const driverActive = role === 'driver';
  const passengerActive = role === 'passenger';

  const driverStyle = useMemo(
    () => [styles.roleButtonBase, driverActive ? styles.roleButtonActive : styles.roleButtonInactive],
    [driverActive]
  );
  const passengerStyle = useMemo(
    () => [styles.roleButtonBase, passengerActive ? styles.roleButtonActive : styles.roleButtonInactive],
    [passengerActive]
  );

  const driverTextStyle = useMemo(
    () => [styles.roleTextBase, driverActive ? styles.roleTextActive : styles.roleTextInactive],
    [driverActive]
  );
  const passengerTextStyle = useMemo(
    () => [styles.roleTextBase, passengerActive ? styles.roleTextActive : styles.roleTextInactive],
    [passengerActive]
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.header, { paddingTop: Math.max(8, insets.top) }]}>
        <SavaariLogo textColor={colors.backgroundBottom} />
      </View>

      <View style={styles.content}>
        <View style={styles.roleWrap}>
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: driverActive }}
            onPress={() => setRole('driver')}
            style={({ pressed }) => [driverStyle, pressed ? styles.pressed : null]}
          >
            <Text style={driverTextStyle}>Driver</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: passengerActive }}
            onPress={() => setRole('passenger')}
            style={({ pressed }) => [passengerStyle, pressed ? styles.pressed : null]}
          >
            <Text style={passengerTextStyle}>Passenger</Text>
          </Pressable>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => onContinue?.(role)}
          style={({ pressed }) => [styles.continueButton, pressed ? styles.pressed : null]}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 18,
    paddingBottom: 6,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  roleWrap: {
    width: '100%',
    gap: 14,
    marginBottom: 54,
  },
  roleButtonBase: {
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleButtonActive: {
    backgroundColor: '#49E0B7',
    borderWidth: 1,
    borderColor: '#49E0B7',
  },
  roleButtonInactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#49E0B7',
  },
  roleTextBase: {
    fontSize: 16,
    fontWeight: '600',
  },
  roleTextActive: {
    color: '#0E6B55',
  },
  roleTextInactive: {
    color: '#0E6B55',
  },
  continueButton: {
    backgroundColor: colors.brandGreen,
    paddingHorizontal: 44,
    paddingVertical: 12,
    borderRadius: 22,
    minWidth: 160,
    alignItems: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.92,
  },
});
