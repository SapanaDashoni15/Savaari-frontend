import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

type Props = {
  textColor?: string;
};

export const SavaariLogo = memo(function SavaariLogo({ textColor }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.markOuter}>
        <View style={styles.markInner} />
      </View>
      <Text style={[styles.text, textColor ? { color: textColor } : null]}>
        Savaari
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  markOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F59E0B',
  },
  text: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
