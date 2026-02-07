import { memo } from 'react';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

import { colors } from '../theme/colors';

export const SplashIllustration = memo(function SplashIllustration() {
  return (
    <Svg width={220} height={220} viewBox="0 0 220 220">
      <Circle cx={110} cy={120} r={86} fill={colors.brandYellow} />

      {/* simple map grid */}
      <G opacity={0.85}>
        <Path
          d="M44 92 C72 70, 106 66, 136 82 C160 95, 176 112, 176 136"
          stroke={colors.gridWhite}
          strokeWidth={3}
          fill="none"
        />
        <Path
          d="M52 156 C74 132, 104 120, 138 126 C156 130, 170 140, 176 156"
          stroke={colors.gridWhite}
          strokeWidth={3}
          fill="none"
        />
        <Path
          d="M70 78 C76 110, 76 140, 70 170"
          stroke={colors.gridWhite}
          strokeWidth={3}
          fill="none"
        />
        <Path
          d="M104 70 C108 104, 108 138, 104 176"
          stroke={colors.gridWhite}
          strokeWidth={3}
          fill="none"
        />
        <Path
          d="M140 78 C134 110, 134 140, 140 170"
          stroke={colors.gridWhite}
          strokeWidth={3}
          fill="none"
        />
      </G>

      {/* location pin */}
      <G>
        <Path
          d="M110 44c-24.3 0-44 19.7-44 44 0 35.2 44 88 44 88s44-52.8 44-88c0-24.3-19.7-44-44-44z"
          fill={colors.brandGreen}
        />
        <Circle cx={110} cy={90} r={20} fill={colors.brandYellow} />
      </G>

      {/* simplified auto icon */}
      <G>
        <Rect x={92} y={118} width={36} height={28} rx={6} fill={colors.brandGreenDark} />
        <Rect x={98} y={122} width={24} height={10} rx={3} fill={colors.brandGreen} />
        <Circle cx={102} cy={150} r={6} fill={colors.brandGreenDark} />
        <Circle cx={118} cy={150} r={6} fill={colors.brandGreenDark} />
      </G>
    </Svg>
  );
});
